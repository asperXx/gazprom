<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>ГазпромБанк Портал</title>

    <script>
	    window.Laravel = <?php echo json_encode(['csrfToken' => csrf_token()]); ?>
	</script>

    <!— Fonts —>
        
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">

</head>

<body>
    <div id="app">
        
    </div>
    <script src="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/index.min.js"></script>
    <script type="text/javascript" src="js/app.js"></script>
    <script src="https://surveyjs.azureedge.net/1.7.12/survey.vue.min.js"></script>

<!---

Логин: admin@admin.com
Пароль: 123456

-->

</body>

</html>
