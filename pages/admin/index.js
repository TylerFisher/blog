import { useEffect } from "react";
import Post from '../../components/previews/Post';

import config from "../../cms/config";

const AdminPage = () => {
  useEffect(() => {
    ;(async () => {
      const CMS = (await import('netlify-cms-app')).default
      const cloudinary = (await import('netlify-cms-media-library-cloudinary')).default;

      CMS.init({config})
      CMS.registerMediaLibrary(cloudinary);
      CMS.registerPreviewTemplate('blog', Post);
    })()
  }, [])
  return <div />;
};

export default AdminPage;