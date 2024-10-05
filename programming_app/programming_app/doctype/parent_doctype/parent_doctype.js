// Copyright (c) 2024, D-codE and contributors
// For license information, please see license.txt

frappe.ui.form.on("Parent DocType", {

    // All event Documentation : https://frappeframework.com/docs/user/en/api/form

    // frm indicates current form/ current doctype form


    // refresh : Triggered when the form is loaded and rendered.
	// refresh(frm) {
    //     frappe.msgprint(__("Welcome to this Form. from 'refresh' event"));
	// },


    // before_load : Triggered before the form is about to load


    // onload : Triggered when the form is loaded and is about to render
    // onload(frm) {
    //     frappe.msgprint(__("Welcome to this Form. from 'onload' event"));
	// },


    // onload_post_render : Triggered after the form is loaded and rendered


    // validate : trigger just before save the document
    validate(frm) {
        frappe.throw(__("Welcome to this Form. from 'validate' event"))
    }


    // before_save event : 
    // after_save event : 


    // {fieldname} : Triggered when the value of fieldname is changed


    // before_submit : 	Triggered before submit is called
    // on_submit : Triggered after form is submitted


    // before_cancel : 
    // after_cancel : 


    // before_discard : 
    // after_discard : 


    
});
