import { useEffect } from "react";
import Post from "../../components/previews/Post";

import config from "../../cms/config";

const AdminPage = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import("decap-cms-app")).default;
      const cloudinary = (await import("netlify-cms-media-library-cloudinary"))
        .default;

      CMS.init({ config });
      CMS.registerMediaLibrary(cloudinary);
      CMS.registerPreviewTemplate("blog", Post);

      CMS.registerEditorComponent({
        id: "figure", // Internal id of the component
        label: "Figure", // Visible label
        // Fields the user need to fill out when adding an instance of the component
        fields: [
          {
            name: "image",
            label: "Image",
            widget: "image",
          },
          {
            name: "alt",
            label: "Alt",
            widget: "string",
          },
          {
            name: "caption",
            label: "Caption",
            widget: "string",
          },
        ],
        pattern:
          /^<figure><img src="(.*)" alt="(.*)" \/><figcaption>(.*)<\/figcaption><\/figure>/, // Pattern to identify a block as being an instance of this component
        // Function to extract data elements from the regexp match
        fromBlock: function (match) {
          return {
            image: match[1],
            alt: match[2],
            caption: match[3],
          };
        },
        // Function to create a text block from an instance of this component
        toBlock: function (obj) {
          return (
            '<figure><img src="' +
            obj.image +
            '" alt="' +
            obj.alt +
            '" /><figcaption>' +
            obj.caption +
            "</figcaption></figure>"
          );
        },
        // Preview output for this component. Can either be a string or a React component
        // (component gives better render performance)
        toPreview: function (obj) {
          return (
            '<figure><img src="' +
            obj.image +
            '" alt="' +
            obj.alt +
            '" /><figcaption>' +
            obj.caption +
            "</figcaption></figure>"
          );
        },
      });
    })();
  }, []);
  return <div />;
};

export default AdminPage;
