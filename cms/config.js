module.exports = {
  // We want to manually init the config file
  cms_manual_init: true,
  // Backend configuration, in this case with git
  backend: {
    name: "git-gateway",
    branch: "master",
    squash_merges: true,
  },
  // Local backend is used during development
  local_backend: true,
  // Where to store the images
  media_folder: "public/images/",
  // Where to link the images
  public_folder: "public/images/",
  media_library: {
    name: "cloudinary",
    config: {
      cloud_name: "tylrfishr",
      api_key: "578153955614643",
      default_transformations: [
        [
          {
            "fetch_format": "auto",
            "quality": "auto"
          },
          {
            "width": 1200,
            "crop": "fill"
          },
        ],
      ],
    },
  },
  // The Pages collection
  collections: [
    {
      name: "Pages",
      label: "Pages",
      files: [
        {
          label: "Home",
          name: "home",
          file: "content/home.md",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Publish date",
              name: "date",
              widget: "datetime",
            },
            {
              label: "Body",
              name: "body",
              widget: "markdown",
            },
          ],
        },
        {
          label: "About",
          name: "about",
          file: "content/about.md",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Publish date",
              name: "date",
              widget: "datetime",
            },
            {
              label: "Body",
              name: "body",
              widget: "markdown",
            },
          ],
        },
      ],
    },
    {
      label: "Blog",
      name: "blog",
      folder: "content/posts",
      create: true,
      slug: '{{year}}-{{month}}-{{day}}_{{slug}}',
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "Publish date",
          name: "date",
          widget: "datetime",
        },
        {
          label: "Description",
          name: "description",
          widget: "string",
        },
        {
          label: "Lead image",
          name: "leadImage",
          widget: "object",
          required: true,
          fields: [
            {
              label: "Image",
              name: "image",
              widget: "image",
            },
            {
              label: "Alt",
              name: "alt",
              widget: "string"
            },
            {
              label: "Caption",
              name: "caption",
              widget: "string"
            },
          ],
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
        },
      ],
    }
  ],
};