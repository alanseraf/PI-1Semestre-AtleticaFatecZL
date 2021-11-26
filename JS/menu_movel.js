function MudaImg(){
    checkbox = document.getElementById('bt_menu');
    if(checkbox.checked) {
    document.getElementById('dropdown').src = 'img/fechar_white.ico';
} else {
    document.getElementById('dropdown').src = 'img/menu_white.ico';
    }
}