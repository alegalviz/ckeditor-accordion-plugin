ckeditor accordion plugin para Drupal 7, basado en ffreitasalves/ckeditor-accordion-plugin
=============

Ckeditor plugin para Drupal 7 para crear un Acordeón de Jquery UI


Instalación
=============

Extraer la carpeta accordion en sites/all/modules/ckeditor/plugins

Ir al sitio en la dirección: admin/config/content/ckeditor/edit/Full (o al perfil de ckeditor donde quiera habilitar el plugin)
Ir a la sección Apariencia del editor y habilitar el plugin. Agregarlo a la barra de herramientas.



Dependencias:
=============

Debes tener jquery, jquery-ui and jquery-ui css cualquier tema:

    <link rel="stylesheet" href="//code.jquery.com/ui/1.11.0/themes/smoothness/jquery-ui.css"> 
    
    <script src="//code.jquery.com/jquery-1.10.2.js"></script>
    
    <script src="//code.jquery.com/ui/1.11.0/jquery-ui.js"></script>

Uso:
=======
Debes agregar la inicialización en tus scripts.

    <script type="text/javascript">
    
        $(".accordion").accordion();
        
    </script>
