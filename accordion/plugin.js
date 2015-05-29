/**
 * @file Plugin para insertar un acordeón en el cuerpo del texto
 */
( function(){
CKEDITOR.plugins.add( 'accordion', {
    init : function( editor ) {
        editor.addCommand( 'accordionDialog', new CKEDITOR.dialogCommand( 'accordionDialog' ) );

        editor.ui.addButton('Accordion', {
            label: Drupal.t('Insert Accordion'),
            icon : this.path + 'icons/accordion.png',
            command: 'accordionDialog',
            toolbar: 'insert'
        });

        CKEDITOR.dialog.add( 'accordionDialog', this.path + 'dialogs/accordion.js' );


    }
})
})();
