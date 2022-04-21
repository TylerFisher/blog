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
            fetch_format: "auto",
            quality: "auto",
          },
          {
            width: 1200,
            crop: "fill",
          },
        ],
      ],
    },
  },
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
              label: "About summary",
              name: "summary",
              widget: "markdown",
            },
            {
              label: "Currently reading",
              name: "reading",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Author",
                  name: "author",
                  widget: "string",
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Currently listening",
              name: "listening",
              widget: "object",
              fields: [
                {
                  label: "Artist",
                  name: "artist",
                  widget: "string",
                },
                {
                  label: "Album",
                  name: "album",
                  widget: "string",
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
            },
            {
              label: "Currently playing",
              name: "playing",
              widget: "object",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                },
                {
                  label: "Platform",
                  name: "platform",
                  widget: "string",
                },
                {
                  label: "Link",
                  name: "link",
                  widget: "string",
                },
              ],
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
        {
          label: "Portfolio",
          name: "portfolio",
          file: "content/portfolio.md",
          fields: [
            {
              label: "Title",
              name: "title",
              widget: "string",
            },
            {
              label: "Summary",
              name: "summary",
              widget: "markdown",
            },
            {
              label: "Projects",
              name: "projects",
              widget: "list",
              summary: "{{fields.title}}",
              fields: [
                {
                  label: "Title",
                  name: "title",
                  widget: "string",
                  required: true,
                },
                {
                  label: "Description",
                  name: "description",
                  widget: "markdown",
                  required: true,
                },
                {
                  label: "Published date",
                  name: "published_date",
                  widget: "string",
                  required: true,
                },
                {
                  label: "URL",
                  name: "url",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Repository",
                  name: "repo",
                  widget: "string",
                  required: false,
                },
                {
                  label: "Technologies used",
                  name: "tech",
                  widget: "text",
                  required: true,
                },
                {
                  label: "Image",
                  name: "image",
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
                      widget: "string",
                    },
                    {
                      label: "Caption",
                      name: "caption",
                      widget: "string",
                    },
                  ],
                },
              ],
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
      slug: "{{year}}-{{month}}-{{day}}_{{slug}}",
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
              widget: "string",
            },
            {
              label: "Caption",
              name: "caption",
              widget: "string",
            },
          ],
        },
        {
          label: "Category",
          name: "category",
          widget: "relation",
          collection: "categories",
          search_fields: ["title"],
          value_field: "title",
        },
        {
          label: "Body",
          name: "body",
          widget: "markdown",
        },
      ],
    },
    {
      label: "Categories",
      name: "categories",
      folder: "content/categories",
      create: true,
      fields: [
        {
          label: "Title",
          name: "title",
          widget: "string",
        },
        {
          label: "About",
          name: "about",
          widget: "text",
        },
      ],
    },
  ],
};
