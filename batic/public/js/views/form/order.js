baticApp.forms['order'] = {
    form: [
        {
            type: 'row',
            fields: [
                {
                    col: 6,
                    field: {
                        name: 'naming_series',
                        title: baticApp.app.__lang('Series'),
                        type: 'Select',
                        required: true,
                    }
                },
                {
                    col: 6,
                    field: {
                        name: 'customer',
                        title: baticApp.app.__lang('Client'),
                        type: 'Link',
                        doctype: 'Customer',
                        link: {
                            txt: '',
                            doctype: 'Customer',
                            reference_doctype: 'Order',
                            ignore_user_permissions: 0,
                            page_length: 10
                        },
                        required: false,
                    }
                },
                {
                    col: 3,
                    field: {
                        name: 'order_typec',
                        title: baticApp.app.__lang('Order Type'),
                        type: 'Select',
                        required: true,
                    }
                },
                {
                    col: 3,
                    field: {
                        name: 'status',
                        title: baticApp.app.__lang('Status'),
                        type: 'Select',
                        required: true,
                    }
                },
                {
                    col: 3,
                    field: {
                        name: 'posting_date',
                        title: baticApp.app.__lang('Posting Date'),
                        type: 'Date',
                        default_value: baticApp.app.datetime._date('YYYY-MM-DD'),
                        required: true,
                    }
                },
                {
                    col: 3,
                    field: {
                        name: 'due_date',
                        title: baticApp.app.__lang('Due Date'),
                        type: 'Date',
                        required: false,
                    }
                }
            ]
        },

        {
            type: 'row',
            title: baticApp.app.__lang('Lead owner'),
            fields: [
                {
                    col: 12,
                    field: {
                        name: 'agents',
                        title: baticApp.app.__lang('Agents'),
                        type: 'Table',
                        doctype: 'Order',
                        addButtonTitle: baticApp.app.__lang('Add Agent'),
                        fields: [
                            {
                                name: 'employee',
                                title: baticApp.app.__lang('Employee'),
                                type: 'Link',
                                link: {
                                    txt: '',
                                    doctype: 'Employee',
                                    reference_doctype: 'EmpOrders',
                                    ignore_user_permissions: 0,
                                    page_length: 10,
                                    // filters: {"type_of_job": ["in", ["Team Head Lawyer"]]}
                                },
                                required: false
                            }
                        ]
                    }
                },
                {
                    col: 12,
                    field: {
                        name: 'order_details',
                        title: baticApp.app.__lang('Order Details'),
                        type: 'Small Text',
                        required: true
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
                        name: 'attachments',
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
