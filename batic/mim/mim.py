import frappe
from frappe.model.naming import make_autoname, parse_naming_series
from frappe.utils import flt, today, get_datetime, add_to_date,getdate

def add_client_code(doc,Method=None):
    if not doc.custom_client_code or doc.is_new():
        id = frappe.db.get_value("Customer",{"custom_client_code":["!=",""]},"custom_client_code",order_by="custom_client_code desc")
        if not id:
            id = 0
        id+=1
        doc.custom_client_code = id
        year = getdate(today()).year
        name = "C-"+doc.customer_type+"-"+str(year)[-2:]+"-"+str(id)
        doc.name = name



def update_customer_clode():
    clients = frappe.db.get_all("Customer",filters={"custom_client_code":["=",""]},fields="name")
    counter = 1
    for client in clients:
        doc = frappe.get_doc("Customer",client.name)
        doc.db_set("custom_client_code",client)
        counter+=1
        frappe.db.commit()