CKEDITOR.dialog.add( 'accordionDialog', function ( editor ) {
    return {
        title: 'Configuración del acordeón',
        minWidth: 400,
        minHeight: 200,
        contents: [
            {
                id: 'tab-basic',
                label: 'Basic Settings',
                elements: [
                    {
                        type: 'text',
                        id: 'number',
                        label: 'Número de secciones del acordeón',
                        validate: CKEDITOR.dialog.validate.notEmpty( "No se puede dejar una sección vacía" )
                    }
                ]
            }
        ],
        onOk: function() {
            var dialog = this;
            var sections = parseInt(dialog.getValueOf('tab-basic','number'));

            section = "<h3>Título de la sección</h3><div><p>Escriba el texto de la sección aquí</p></div>"
            intern = ""
            for (i=0;i<sections;i++){
                intern = intern + section
            }

            editor.insertHtml('<div class="accordion">'+ intern +'</div>');

        }
    };
});
