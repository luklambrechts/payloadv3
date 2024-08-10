import { GlobalConfig } from 'payload'

export const Footer: GlobalConfig = {
  slug: 'footer',
  fields: [
    {
      name: 'logo',
      label: 'Logo',
      type: 'upload',
      relationTo: 'media',
      required: true,
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
        },
      ],
      minRows: 1, // Min number of nav items
      maxRows: 5, // Max number of nav items
      required: true,
    },
    {
      name: 'copyrightNotice',
      label: 'CopyRight Notice',
      type: 'text',
    },
  ],
}
