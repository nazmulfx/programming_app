// Copyright (c) 2024, D-codE and contributors
// For license information, please see license.txt

frappe.ui.form.on("Parent DocType", {

    // All event Documentation : https://frappeframework.com/docs/user/en/api/form
    // frm indicates current form/ current doctype form

    // ##########  EVENTS  ##################

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
    // validate(frm) {
    //     frappe.throw(__("Welcome to this Form. from 'validate' event"))
    // }


    // before_save event : 
    // after_save event : 


    // {fieldname} : Triggered when the value of fieldname is changed


    // before_submit : 	Triggered before submit is called
    // on_submit : Triggered after form is submitted


    // before_cancel : 
    // after_cancel : 


    // before_discard : 
    // after_discard : 

    // ##########  Fetch Data  ##################

    // Fetch Data : fetch data from DocType
    // after_save(frm) {
    //     // frappe.msgprint(__("Age is {0}",[frm.doc.age]));
    //     // frappe.msgprint(__(`Age is set to ${frm.doc.age}`))

    //     frappe.msgprint({
    //         title: __("Notification"),
    //         indicator: "red",
    //         message: __("Hello World")
    //     })
    // }


    // ##########  FORM API  ##################

    // frm.is_new() : True/False : Check if the form is new and is not saved yet.


    // frm.set_intro("msg*", "color") : Set intro text on the top of the form. The function takes two parameters: message (string, required) and color (string, optional). 
    // Color can be 'blue', 'red', 'orange', 'green' or 'yellow'. Default is blue.
    // refresh(frm) {
    //     if(frm.is_new()) {
    //         // frm.set_intro("Now you can create a new parrent doctype")
    //         frm.set_intro("Please, ensure that all mendatory field is filled", "orange")
    //     }
    // }


    // frm.set_value : Set the value of a field. This will trigger the field change event in the form.

    // 


    // ##########  Set Value : field  ##################
    validate(frm) {

        // frm.doc.full_name = frm.doc.first_name + " " + frm.doc.last_name

        // frm.set_value("field_name", "data")
        frm.set_value("full_name", frm.doc.first_name + " " + frm.doc.last_name)
    },


    // ##########  Dialog  ##################
    refresh(frm) {
        if(frm.is_new()) {
            let dialogBox = new frappe.ui.Dialog({
                title: "Enter Parent DocType details: ",
                fields: [
                    {
                        label : "First Name",
                        fieldname : "first_name",
                        fieldtype : "Data"
                    },
                    {
                        label : "Last Name",
                        fieldname : "last_name",
                        fieldtype : "Data"
                    },
                    {
                        label : "Age",
                        fieldname : "age",
                        fieldtype : "Data"  // field type must be data field (int field not showing)
                    }
                ],
                primary_action_lebel : "Submit",
                primary_action(values) {
                    frm.set_value("first_name", values.first_name),
                    frm.set_value("last_name", values.last_name),
                    frm.set_value("age", values.age),

                    dialogBox.hide()    // after action => hide dialogBox
                },
            })

            dialogBox.show()    // if doc new => showing dialogBox
        
        }   // if is_new()

    }   // refresh event


    // frm.is_dirty() : True/False : Check if form values has been changed and is not saved yet.





});
