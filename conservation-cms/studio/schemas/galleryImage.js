export default {
  name: "galleryImage",
  title: "Gallery Images",
  type: "document",
  fields: [
    {
      name: "caption",
      title: "Caption",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: "alt",
      title: "Alternative text",
      type: "string",
      description: "Important for SEO and accessibility",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Wildlife", value: "wildlife" },
          { title: "Landscape", value: "landscape" },
          { title: "Volunteers", value: "volunteers" },
          { title: "Events", value: "events" },
        ],
      },
    },
  ],
  preview: {
    select: {
      title: "caption",
      media: "image",
    },
  },
}
