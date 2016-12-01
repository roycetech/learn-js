# text = '    <!-- ngIf: !disableNumbers --><b class="header-num ng-binding ng-scope" ng-if="!disableNumbers">1.4</b><!-- end ngIf: !disableNumbers -->\n    A New Route and a Root Route <!-- ngIf: $page.pending -->\n\n<!-- ngIf: $page.required --><span possible-points="true" class="header-label label ng-scope ng-binding" ng-if="$page.required">250 pts</span><!-- end ngIf: $page.required -->\n'


get_title = (string) ->
  string.replace(/<!--.*?-->/g, '')
        .replace(/<.*?>/g, '')
        .replace(/250 pts/g, '')
        .replace(/\n/g, '')
        .replace(/  /g, ' ')
        .replace(/^\s*/g, '');

alert get_title $('.header-num').parent().text()


# result = get_title text

# console.log result
