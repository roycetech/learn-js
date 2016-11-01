# $('.objective-body').find('p.ng-scope').html();

# output = ''
# $('div[compile-html]').each (el)->
#   output += "#{el.html()}\n"
# alert(output);


# removeTags = (string) ->
#   string.replace(/<\/?\w+>/, '');

output = '/**\n'
index = 0
$('div[compile-html]').each (index, element) ->
    output += index + ". " if index > 0
    output += "#{$(element).find('p').html()}\n";
    output += "\nTasks:\n" if index == 0
    index += 1
alert output.replace(/<\/?.+?>/g, '').replace(///\x20{2,}///g, ' ') + " */";


# var output='/**\n';
# var index = 0;
# $('div[compile-html]').each(function(index, element) {
#     if (index > 0) {
#         output += index + ". ";
#   }
#     output += $(element).find('p').html() + "\n";
#     if (index == 0) {
#         output += "\nTasks:\n";
#   }
#     index++;
# });
# alert(output.replace(/<\/?.+?>/g, '').replace(/ {2,}/g, ' ') + " */");