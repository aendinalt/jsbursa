<map version="freeplane 1.2.0">
<!--To view this file, download free mind mapping software Freeplane from http://freeplane.sourceforge.net -->
<node TEXT="ToDO list" ID="ID_1723255651" CREATED="1283093380553" MODIFIED="1414694543715"><hook NAME="MapStyle">

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node">
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="right">
<stylenode LOCALIZED_TEXT="default" MAX_WIDTH="600" COLOR="#000000" STYLE="as_parent">
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.note"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="right">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="right">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="4"/>
<node TEXT="Type" POSITION="right" ID="ID_1904824320" CREATED="1414694554714" MODIFIED="1414694558261">
<edge COLOR="#ff0000"/>
<node TEXT="Connect" ID="ID_725666793" CREATED="1414694562517" MODIFIED="1414694565269">
<node TEXT="name: &apos;some&apos;" ID="ID_859800077" CREATED="1414694575843" MODIFIED="1414694586624"/>
</node>
<node TEXT="Upsert" ID="ID_1981954733" CREATED="1414694565890" MODIFIED="1414694568005">
<node TEXT="taskid: id" ID="ID_1083522294" CREATED="1414694589381" MODIFIED="1414694679122"/>
<node TEXT="title" ID="ID_727866296" CREATED="1414694606457" MODIFIED="1414694608975"/>
<node TEXT="description" ID="ID_1192572718" CREATED="1414694609602" MODIFIED="1414694614030"/>
<node TEXT="status" ID="ID_1272493678" CREATED="1414694615972" MODIFIED="1414694618980">
<node TEXT="to do" ID="ID_1048212041" CREATED="1414694618990" MODIFIED="1414694635429"/>
<node TEXT="in progress" ID="ID_1925731810" CREATED="1414694635721" MODIFIED="1414694638659"/>
<node TEXT="done" ID="ID_1344661181" CREATED="1414694639259" MODIFIED="1414694657623"/>
</node>
</node>
<node TEXT="Delete" ID="ID_444051470" CREATED="1414694568574" MODIFIED="1414694570998">
<node TEXT="taskid: id" ID="ID_1740283460" CREATED="1414694661677" MODIFIED="1414694672465"/>
</node>
</node>
<node TEXT="WebSocket" POSITION="left" ID="ID_436689204" CREATED="1414694689573" MODIFIED="1414694695116">
<edge COLOR="#0000ff"/>
<node TEXT="192.168.88.228:4500" ID="ID_1093427119" CREATED="1414694695127" MODIFIED="1414694707312"/>
</node>
<node TEXT="Steps" POSITION="right" ID="ID_825268258" CREATED="1414695736591" MODIFIED="1414695740428">
<edge COLOR="#00ff00"/>
<node TEXT="&#x441;&#x432;&#x435;&#x440;&#x441;&#x442;&#x430;&#x442;&#x44c;" ID="ID_1593631871" CREATED="1414695740436" MODIFIED="1414695743015"/>
<node TEXT="&#x43f;&#x440;&#x43e;&#x432;&#x435;&#x440;&#x438;&#x442;&#x44c; &#x445;&#x44d;&#x448;" ID="ID_745258311" CREATED="1414695743633" MODIFIED="1414695749449">
<node TEXT="&#x43f;&#x443;&#x441;&#x442;&#x43e;&#x439;" ID="ID_1492962434" CREATED="1414695749460" MODIFIED="1414697660433">
<node TEXT="&#x43f;&#x43e;&#x43a;&#x430;&#x437;&#x430;&#x442;&#x44c; &#x442;&#x43e;&#x43b;&#x44c;&#x43a;&#x43e; &#x432;&#x435;&#x440;&#x445;" ID="ID_1953389208" CREATED="1414697662613" MODIFIED="1414697669563"/>
</node>
<node TEXT="&#x43d;&#x435; &#x43f;&#x443;&#x441;&#x442;&#x43e;&#x439;" ID="ID_1332410293" CREATED="1414697672617" MODIFIED="1414697693265">
<node TEXT="&#x43f;&#x43e;&#x43a;&#x430;&#x437;&#x430;&#x442;&#x44c; &#x442;&#x43e;&#x43b;&#x44c;&#x43a;&#x43e; &#x43d;&#x438;&#x437;" ID="ID_1479809187" CREATED="1414697695430" MODIFIED="1414697702169"/>
<node TEXT="&#x43e;&#x442;&#x43f;&#x440;&#x430;&#x432;&#x438;&#x442;&#x44c; get /tasks?id=name" ID="ID_1019852586" CREATED="1414697702690" MODIFIED="1414697721030"/>
<node TEXT="&#x43e;&#x442;&#x440;&#x438;&#x441;&#x43e;&#x432;&#x430;&#x442;&#x44c; &#x442;&#x430;&#x441;&#x43a;&#x438;" ID="ID_1334514921" CREATED="1414697725352" MODIFIED="1414697732268">
<node TEXT="New" ID="ID_142959111" CREATED="1414697818093" MODIFIED="1414697832565"/>
<node TEXT="In Progress" ID="ID_338779765" CREATED="1414697833179" MODIFIED="1414697839292"/>
<node TEXT="Done" ID="ID_723868362" CREATED="1414697839899" MODIFIED="1414697842245"/>
</node>
</node>
</node>
<node TEXT="&#x440;&#x435;&#x430;&#x43b;&#x438;&#x437;&#x43e;&#x432;&#x430;&#x442;&#x44c; &#x43d;&#x430;&#x447;&#x430;&#x442;&#x44c; &#x440;&#x430;&#x431;&#x43e;&#x442;&#x443;" ID="ID_874302187" CREATED="1414695759191" MODIFIED="1414695768328"/>
<node TEXT="&#x421;&#x43e;&#x431;&#x44b;&#x442;&#x438;&#x44f;" ID="ID_977093647" CREATED="1414697755508" MODIFIED="1414697760478">
<node TEXT="&#x441;&#x43e;&#x437;&#x434;&#x430;&#x442;&#x44c; &#x442;&#x430;&#x441;&#x43a;" ID="ID_823894594" CREATED="1414697760489" MODIFIED="1414697770849"/>
<node TEXT="&#x43f;&#x435;&#x440;&#x435;&#x434;&#x432;&#x438;&#x43d;&#x443;&#x442;&#x44c; &#x442;&#x430;&#x441;&#x43a;" ID="ID_1285308406" CREATED="1414697771392" MODIFIED="1414697776975"/>
<node TEXT="&#x443;&#x434;&#x430;&#x43b;&#x438;&#x442;&#x44c; &#x442;&#x430;&#x441;&#x43a;" ID="ID_1831360784" CREATED="1414697777785" MODIFIED="1414697810791"/>
</node>
</node>
<node TEXT="get /tasks?id=name" POSITION="left" ID="ID_1483279870" CREATED="1414694708023" MODIFIED="1414697567847">
<edge COLOR="#ff00ff"/>
</node>
</node>
</map>
