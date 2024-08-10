import { GlobalConfig } from "payload";

export const Header: GlobalConfig = {
  slug: 'header',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'nav',
      label: 'Navigation',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Label',
          type: 'text',
        },
        {
          name: 'link',
          label: 'Link',
          type: 'text',
        }
      ],
      minRows: 1, // Minimum number of nav items
      maxRows: 5, // Maximum number of nav items,
      required: true
    }
  ],
}