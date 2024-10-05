// Copyright (c) 2024, D-codE and contributors
// For license information, please see license.txt

frappe.ui.form.on("Parent DocType", {

    // frm indicates current form/ current doctype form
	refresh(frm) {
        frappe.msgprint(__("Welcome to this Form. from 'refresh' event"));
	},
    
});
