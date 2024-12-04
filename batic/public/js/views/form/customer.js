baticApp.forms['customer'] = {
    form: [
        {
            type: 'row',
            fields: [
                {
                    col: 4,
                    field: {
                        name: 'image',
                        title: baticApp.app.__lang('Item Image'),
                        type: 'Attach Image',
                    }
                },
                {
                    col: 4,
                    field: {
                        name: 'customer_name',
                        title: baticApp.app.__lang('Full Name'),
                        type: 'Data',
                        required: true,
                    }
                },
                {
                    col: 4,
                    field: {
                        name: 'custom_client_code',
                        title: baticApp.app.__lang('Client Code'),
                        type: 'Data',
                        readonly: true
                    }
                }
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    col: 4,
                    field: {
                        name: 'custom_commercial_number',
                        title: baticApp.app.__lang('Commercial Number'),
                        type: 'Data',
                    }
                },
                {
                    col: 4,
                    field: {
                        name: 'custom_invoicing_customer_name',
                        title: baticApp.app.__lang('Invoicing Customer Name'),
                        type: 'Data',
                    }
                },
                {
                    col: 4,
                    field: {
                        name: 'custom_national_address',
                        title: baticApp.app.__lang('National Address'),
                        type: 'Data',
                    }
                }
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    col: 6,
                    field: {
                        name: 'customer_group',
                        title: baticApp.app.__lang('Customer Group'),
                        type: 'Link',
                        doctype: 'Customer',
                        link: {
                            txt: '',
                            doctype: 'Customer Group',
                            reference_doctype: 'Customer',
                            ignore_user_permissions: 0,
                            filters: JSON.stringify({"is_group": 0})
                        },
                        required: false,
                    }
                },
                {
                    col: 6,
                    field: {
                        name: 'territory',
                        title: baticApp.app.__lang('Territory'),
                        type: 'Link',
                        doctype: 'Customer',
                        link: {
                            txt: '',
                            doctype: 'Territory',
                            reference_doctype: 'Customer',
                            ignore_user_permissions: 0,
                            filters: {}
                        },
                        required: false,
                    }
                },
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    col: 6,
                    field: {
                        name: 'customer_type',
                        title: baticApp.app.__lang('Type'),
                        type: 'Select'
                    }
                },
                {
                    col: 6,
                    field: {
                        name: 'tax_id',
                        title: baticApp.app.__lang('Tax ID'),
                        type: 'Data'
                    }
                }
            ]
        },
        {
            type: 'row',
            fields: [
                {
                    col: 3,
                    field: {
                        name: 'mobile_no',
                        title: baticApp.app.__lang('Phone'),
                        type: 'Data'
                    }
                },
                {
                    col: 3,
                    field: {
                        name: 'email_id',
                        title: baticApp.app.__lang('Email'),
                        type: 'Data'
                    }
                }
            ]
        },
        {
            type: 'row',
            title: baticApp.app.__lang('Attachments'),
            fields: [
                {
                    col: 12,
                    field: {
                        name: 'custom_attachments',
                        title: baticApp.app.__lang('Attachments'),
                        type: 'Table',
                        doctype: 'Order',
                        addButtonTitle: baticApp.app.__lang('Add Attachment'),
                        fields: [
                            {
                                name: 'attachment',
                                title: baticApp.app.__lang('Attachment'),
                                type: 'Attach',
                            }
                        ]
                    }
                },
            ]
        }
    ]
}
