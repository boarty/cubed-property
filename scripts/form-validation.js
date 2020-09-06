function validateRequired() {

  if( document.getElementById('user-first-name') == "" ) {
            alert( "Please provide your name!" );
            document.myForm.Name.focus() ;
            return false;
         }

  return( true );
}
