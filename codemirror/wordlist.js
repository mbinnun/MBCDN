var WLIST = {};
// Default file type
WLIST.fileType = "txt";
// Default lists are empty
WLIST.jsKeywordsAll     = [];
WLIST.phpKeywordsAll    = [];
WLIST.sqlKeywordsAll    = [];
WLIST.pythonKeywordsAll = [];
WLIST.javaKeywordsAll   = [];
WLIST.cKeywordsAll      = [];
WLIST.csKeywordsAll     = [];
WLIST.cppKeywordsAll    = [];
WLIST.objcKeywordsAll   = [];
WLIST.htmlKeywordsAll   = [];
WLIST.anyKeywordsAll    = [];
// Will hold the original keywords when the editor will be loaded
WLIST.phpKeywordsOrig    = null;
WLIST.pythonKeywordsOrig = null;
WLIST.javaKeywordsOrig   = null;
WLIST.cKeywordsOrig      = null;
WLIST.csKeywordsOrig     = null;
WLIST.cppKeywordsOrig    = null;
WLIST.objcKeywordsOrig   = null;

// === Initialization ===
WLIST.InitCustomHints = function() {
  if (WLIST.fileType == "js" || WLIST.fileType == "html" || WLIST.fileType == "php" || WLIST.fileType == "asp" || WLIST.fileType == "aspx") {
    WLIST.InitJSHints();
  }
  if (WLIST.fileType == "php"   ) {
    WLIST.InitPHPHints();
  }
  if (WLIST.fileType == "python") {
    WLIST.InitPythonHints();
  }
  if (WLIST.fileType == "sql"   ) {
    WLIST.InitSQLHints();
  }
  if (WLIST.fileType == "java"  ) {
    WLIST.InitJavaHints();
  }
  if (WLIST.fileType == "c"     ) {
    WLIST.InitCHints();
  }
  if (WLIST.fileType == "cs"    ) {
    WLIST.InitCSHints();
  }
  if (WLIST.fileType == "cpp"   ) {
    WLIST.InitCppHints();
  }
  if (WLIST.fileType == "objc"  ) {
    WLIST.InitObjCHints();
  }
  // show warning
  var flgShowWarning = true;
  if (WLIST.anyKeywordsAll.length > 0) {
    flgShowWarning = false; 
  }
  if(typeof WLISTAddMoreHints !== "undefined") { 
    if (WLISTAddMoreHints) { 
      flgShowWarning = false; 
    }
  }
  if (flgShowWarning) {
    BF.DebugText("All the default keywords for autocomplete (intellisense) have been loaded."+"\n\n"
                  +"To have your own keywords,"+"\n"+"implement 'WLISTAddMoreHints = function(){}'"+"\n"
                  +"or add some keywords to the array 'WLIST.anyKeywordsAll'."+"\n\n");
  }
};
WLIST.InitJSHints     = function() {
  // JS native keywords
  WLIST.jsKeywordsString = ("charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search").split(" ");
  WLIST.jsKeywordsArray  = ("javascript length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight").split(" ");
  WLIST.jsKeywordsFunc   = ("prototype apply call bind").split(" ");
  WLIST.jsKeywordsEcma   = ("break case catch class const continue debugger default delete do else export extends false finally for function if in import instanceof new null"
                          +" return super switch this throw true try typeof var void while with yield alert(\"message\") Math.round(fNumber) style document document.body"
                          +" document.getElementById(\"myId\") document.querySelectorAll(\".myClass\")").split(" ");
  // JQuery keywords
  WLIST.jsKeywordsJQuery = ("fadeOut fadeIn jQuery $(document).ready(function(){}); $.ajax({url:\"page.html\"}).done(function(){}); $(\"#elm\").fadeOut();"
                          +" $(\"#elm\").fadeIn(); $(\"#elm\").css({\"width\":\"100%\"}); $(\"#elm\").on(\"click\",function(){});").split(" ");
  // Angular keywords
  WLIST.jsKeywordsAngular = ("$scope $http $routeParams ngMeta $routeProvider $locationProvider ngMetaProvider let").split(" ");
  // Join all keywords
  if (WLIST.fileType == "js" || WLIST.fileType == "html" || WLIST.fileType == "php" || WLIST.fileType == "asp" || WLIST.fileType == "aspx") {
    WLIST.jsKeywordsAll = WLIST.jsKeywordsAll
                          .concat(WLIST.jsKeywordsString).concat(WLIST.jsKeywordsArray)
                          .concat(WLIST.jsKeywordsFunc).concat(WLIST.jsKeywordsEcma)
                          .concat(WLIST.jsKeywordsJQuery).concat(WLIST.jsKeywordsAngular);
    // Sort alphabetically
    WLIST.jsKeywordsAll = WLIST.jsKeywordsAll.sort();
  }
};
WLIST.InitPHPHints    = function() {
	WLIST.phpKeywordsAll = WLIST.phpKeywordsAll.concat(["php"]);
};
WLIST.InitPythonHints = function() {
  // PHP custom keywords
  WLIST.pythonAutoComp  = "";
  WLIST.pythonAutoComp += "python2";
  WLIST.pythonAutoComp += " python3";
  // Add this to PHP keywords
  WLIST.pythonKeywordsAll = WLIST.pythonKeywordsAll.concat((WLIST.pythonAutoComp).split(" "));
};
WLIST.InitSQLHints    = function() {
  // SQL native keywords
  WLIST.sqlKeywordsNative = "alter and as asc between by count create delete desc distinct drop from group having in insert into is"
                          +" join like not on or order select set table union update values where limit";
  WLIST.sqlKeywordsNative = (/*WLIST.sqlKeywordsNative+" "+*/WLIST.sqlKeywordsNative.toUpperCase()).split(" ");
  WLIST.sqlKeywordsCommon = "sql bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp"
                          +" tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char"
                          +" varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric";
  WLIST.sqlKeywordsCommon = (/*WLIST.sqlKeywordsCommon+" "+*/WLIST.sqlKeywordsCommon.toUpperCase()).split(" ");
  WLIST.sqlKeywordsMysql  = "charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"
                          +" accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before"
                          +" binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint"
                          +" checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit"
                          +" committed completion concurrent condition connection consistent constraint contains continue contributors convert cross"
                          +" current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond"
                          +" day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic"
                          +" dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end"
                          +" ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field"
                          +" fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat"
                          +" handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index"
                          +" index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill"
                          +" language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master"
                          +" master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min"
                          +" min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline"
                          +" offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin"
                          +" plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write"
                          +" reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal"
                          +" restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas"
                          +" second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname"
                          +" spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception"
                          +" sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum"
                          +" suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate"
                          +" uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time"
                          +" utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"
                          +" bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint"
                          +" tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date"
                          +" datetime year unsigned signed numeric false true null unknown";
  WLIST.sqlKeywordsMysql  = (/*WLIST.sqlKeywordsMysql+" "+*/WLIST.sqlKeywordsMysql.toUpperCase()).split(" ");
  // Join all keywords
  if (WLIST.fileType == "sql") {
    WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll
                          .concat(WLIST.sqlKeywordsNative).concat(WLIST.sqlKeywordsCommon).concat(WLIST.sqlKeywordsMysql);
    // Sort alphabetically
    WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll.sort();
  }
  // SQL custom keywords
  // ==== BaseFunc keywords ====
  WLIST.sqlAutoComp   = "";
  WLIST.sqlAutoComp  = "SQL";
  WLIST.sqlAutoComp +=" tempDB";
  WLIST.sqlAutoComp +=" tempTable";
  WLIST.sqlKeywordsAll = WLIST.sqlKeywordsAll.concat((WLIST.sqlAutoComp).split(" "));
};
WLIST.InitJavaHints   = function() {
  // JAVA custom keywords
  WLIST.javaAutoComp  = "";
  WLIST.javaAutoComp += "java";
  WLIST.javaAutoComp += " bytecode";
  // Add this to JAVA keywords
  WLIST.javaKeywordsAll = WLIST.javaKeywordsAll.concat((WLIST.javaAutoComp).split(" "));
};
WLIST.InitCHints      = function() {
  // C custom keywords
  WLIST.cAutoComp  = "";
  WLIST.cAutoComp += "getch";
  WLIST.cAutoComp += " main";
  WLIST.cAutoComp += " #include";
  // Add this to C keywords
  WLIST.cKeywordsAll = WLIST.cKeywordsAll.concat((WLIST.cAutoComp).split(" "));
};
WLIST.InitCSHints     = function() {
  // CS custom keywords
  WLIST.csAutoComp  = "";
  WLIST.csAutoComp += "System.IO";
  WLIST.csAutoComp += " System.Collections.Generic";
  // Add this to CS keywords
  WLIST.csKeywordsAll = WLIST.csKeywordsAll.concat((WLIST.csAutoComp).split(" "));
};
WLIST.InitCppHints    = function() {
  // CPP custom keywords
  WLIST.cppAutoComp  = "";
  WLIST.cppAutoComp += "cout";
  WLIST.cppAutoComp += " cin";
  WLIST.cppAutoComp += " namespace";
  // Add this to CPP keywords
  WLIST.cppKeywordsAll = WLIST.cppKeywordsAll.concat((WLIST.cppAutoComp).split(" "));
};
WLIST.InitObjCHints   = function() {
  // CPP custom keywords
  WLIST.objcAutoComp  = "";
  WLIST.objcAutoComp += "NSString";
  WLIST.objcAutoComp += " UILabel";
  // Add this to CPP keywords
  WLIST.objcKeywordsAll = WLIST.objcKeywordsAll.concat((WLIST.objcAutoComp).split(" "));
};
WLIST.AddMoreHints    = function() {
  
}; // ==> Should be re-implemented outside this JS, for adding much more keywords
// Look for external implementations
if(typeof WLISTAddMoreHints !== "undefined") { if (WLISTAddMoreHints) { WLIST.AddMoreHints = WLISTAddMoreHints; } } 
