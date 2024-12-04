frappe.ui.form.on("Task", {
    setup: function (frm) {
        frm.set_query("custom_linked_document_type", () => {
            let linked_docs = ['Case', 'Consultations', 'Company Setup', 'Legal Services', 'Lead', 'Client']
            return {
                filters: {
                    name: ["in", linked_docs],
                },
            };
        });
    }
})