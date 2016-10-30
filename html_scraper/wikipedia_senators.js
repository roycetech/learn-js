/**
 * Get state, name, dob, class of US Senators.
 */

 var output = '';
 $('.wikitable.sortable tbody tr').each(function() {
     var $this = $(this)
     var $state = $this.find('a:first');
     var $name = $this.find('.fn a');
     var dob = $this.find('.bday');
     var cls = $this.find('td:eq(2)').text()
 	output += "'" + $state.text() + ", " + $name.text() + ", " + dob.text() + ", " + cls +"\n";
 });
 alert(output);
