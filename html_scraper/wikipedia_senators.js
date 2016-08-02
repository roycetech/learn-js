/**
 * Get state, name, dob of US Senators.
 */

var output = '';
$('.wikitable.sortable tbody tr').each(function() {
    var $state = $(this).find('a:first');
    var $name = $(this).find('.fn a');
    var dob = $(this).find('.bday');
	output += "'" + $state.text() + "', '" + $name.text() + "', date '" + dob.text() + "'\n";
});
alert(output);
