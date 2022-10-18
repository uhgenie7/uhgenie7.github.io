"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[7680],{5589:t=>{t.exports=JSON.parse('{"blogPosts":[{"id":"/img-onerror/img-onerror","metadata":{"permalink":"/en/fixed/img-onerror/img-onerror","source":"@site/fixed/img-onerror/img-onerror.md","title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","description":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4","date":"2022-10-18T09:18:45.000Z","formattedDate":"October 18, 2022","tags":[{"label":"html","permalink":"/en/fixed/tags/html"},{"label":"img","permalink":"/en/fixed/tags/img"}],"readingTime":1.365,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","description":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4","tags":["html","img"],"last_update":{"date":"2021-03-05"}},"nextItem":{"title":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0 \uc774\ubaa8\ud2f0\ucf58 \uae30\ub2a5 \ucd94\uac00\ud558\uae30","permalink":"/en/fixed/ae-light-add-emoticon/ae-light-add-emoticon"}},"content":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4\\n\\n\x3c!--truncate--\x3e\\n\\n## \uc0c1\ud669\\n\\nAPI\ub85c \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc624\ub294 \ub3c4\uc911, \uc774\ubbf8\uc9c0\uac00 \uae68\uc838 \uc5d0\ub7ec\uac00 \ub744\uc6cc\uc9c0\ub294 \ubb38\uc81c \ubc1c\uc0dd.\\n\\n![comedy \uc2ac\ub77c\uc774\ub4dc\uac00 \uae68\uc9c4 \ubaa8\uc2b5](./error1.png)\\n![404\uc5d0\ub7ec](./error2.png)\\n\\n## \ud574\uacb0 \ubc29\ubc95\\n\\n- onerror \uc18d\uc131\uc744 \uc774\uc6a9\ud55c\ub2e4.\\n\\n1. \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub178\ucd9c\\n\\n```html title=\\"index.html\\" {4}\\n<img\\n  src=\\"\uc6d0\ubcf8 \uc774\ubbf8\uc9c0 \uacbd\ub85c\\"\\n  alt=\\"\uc774\ubbf8\uc9c0\uc758 \ud14d\uc2a4\ud2b8 \uc124\uba85\\"\\n  onError=\\"this.src=\'/movie_api/img/replace.jpg\';\\"\\n/>\\n```\\n\\n2. \uc774\ubbf8\uc9c0 \uc228\uae30\uae30\\n\\n```html title=\\"index.html\\" {4}\\n<img\\n  src=\\"\uc6d0\ubcf8 \uc774\ubbf8\uc9c0 \uacbd\ub85c\\"\\n  alt=\\"\uc774\ubbf8\uc9c0\uc758 \ud14d\uc2a4\ud2b8 \uc124\uba85\\"\\n  onError=\\"this.style.display=\'none\';\\"\\n/>\\n```\\n\\n## \ud574\uacb0\\n\\n![solved1](./fixed1.png)\\n\\n![solved2](./fixed2.png)\\n\\n## \uc774\ubbf8\uc9c0\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\ub294 \uba87 \uac00\uc9c0 \uc0c1\ud669\\n\\n- src \uc18d\uc131\uc774 \ube44\uc5c8\uac70\ub098 null\uc784.\\n- src\uc758 URL\uc774 \ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub294 \ud398\uc774\uc9c0\uc758 URL\uacfc \uac19\uc74c.\\n- \uc9c0\uc815\ud55c \uc774\ubbf8\uc9c0\uac00 \uc190\uc0c1\ub3fc \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc74c.\\n- \uc774\ubbf8\uc9c0\uc758 \uba54\ud0c0\ub370\uc774\ud130\uac00 \uc190\uc0c1\ub3fc \uc6d0\ubcf8 \ud06c\uae30\ub97c \uc54c\uc544\ub0bc \uc218 \uc5c6\uace0, `img` \uc694\uc18c\uc758 \uc18d\uc131\uc5d0\ub3c4 \ud06c\uae30\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc74c.\\n- \uc0ac\uc6a9\uc790 \uc5d0\uc774\uc804\ud2b8\uac00 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc784."},{"id":"/ae-light-add-emoticon/ae-light-add-emoticon","metadata":{"permalink":"/en/fixed/ae-light-add-emoticon/ae-light-add-emoticon","source":"@site/fixed/ae-light-add-emoticon/ae-light-add-emoticon.md","title":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0 \uc774\ubaa8\ud2f0\ucf58 \uae30\ub2a5 \ucd94\uac00\ud558\uae30","description":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0 \uc774\ubaa8\ud2f0\ucf58\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4","date":"2022-10-15T00:00:00.000Z","formattedDate":"October 15, 2022","tags":[{"label":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8","permalink":"/en/fixed/tags/\uc544\ubcf4\uce74\ub3c4-\uc5d0\ub514\uc158-\ub77c\uc774\ud2b8"},{"label":"\uc774\ubaa8\ud2f0\ucf58","permalink":"/en/fixed/tags/\uc774\ubaa8\ud2f0\ucf58"}],"readingTime":6.975,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0 \uc774\ubaa8\ud2f0\ucf58 \uae30\ub2a5 \ucd94\uac00\ud558\uae30","description":"\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0 \uc774\ubaa8\ud2f0\ucf58\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4","tags":["\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8","\uc774\ubaa8\ud2f0\ucf58"],"date":"2022-10-15"},"prevItem":{"title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","permalink":"/en/fixed/img-onerror/img-onerror"}},"content":"## 1. \ub4e4\uc5b4\uac00\uae30 \uc804\uc5d0\\n\\n\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0\ub294 \uc774\ubaa8\ud2f0\ucf58\ucc3d\uc744 \ub744\uc6b8 \uc218\ub294 \uc788\uc9c0\ub9cc, \ub4f1\ub85d\ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.\\n\uc774\ub294 db\ub294 \ub9cc\ub4e4\uc5b4\uc84c\uc73c\ub098 \uadf8\ub204\ubcf4\ub4dc \ucd5c\ucd08 \uc124\uce58 \uc2dc \uc774\ubaa8\ud2f0\ucf58 \ud14c\uc774\ube14\uc774 \ub9cc\ub4e4\uc5b4\uc9c0\uc9c0 \uc54a\uc558\uae30 \ub54c\ubb38\uc785\ub2c8\ub2e4.\\n\ucf54\ub4dc\ub97c \uc57d\uac04\ub9cc \uc218\uc815\ud558\uc5ec \uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub77c\uc774\ud2b8\uc5d0\uc11c\ub3c4 \uc774\ubaa8\ud2f0\ucf58\uc744 \uc368\ubd05\uc2dc\ub2e4.\\n\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \uc124\uce58 \ubc0f \ucf54\ub4dc\ub97c \uc5f4\uc5b4\ubcf4\ub294 \ubc29\ubc95\uc740 \uc0dd\ub7b5\ub418\uc5b4\uc788\uc2b5\ub2c8\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n**\uc9c4\ud589 \uc804, \ubc18\ub4dc\uc2dc \ubc31\uc5c5\ubd80\ud130 \ud574\uc8fc\uc138\uc694.**\\n\\n## 2. \uc218\uc815\ud574\uc57c\ud560 \ud30c\uc77c\\n\\n:::danger\\n**dbconfig.php** \ud30c\uc77c\uc740 \ub9e4\uc6b0 \uc911\uc694\ud558\uace0 \ubbfc\uac10\ud558\uac8c \ub2e4\ub8e8\uc5b4\uc57c \ud560 \ud30c\uc77c\uc785\ub2c8\ub2e4.\\n\uaf2d \uc6d0\ubcf8\uc744 \ubc31\uc5c5\ud574\ub450\uc2dc\uace0 \uc9c4\ud589\ud574\uc8fc\uc138\uc694.\\n:::\\n\\n```php title=\\"data/dbconfig.php\\"\\n// ...\\n$g5[\'css_table\'] = G5_TABLE_PREFIX.\'css_config\'; // CSS STYLE \uc815\uc758 \uc800\uc7a5\ud558\ub294 \ud14c\uc774\ube14\\n// highlight-next-line\\n$g5[\'emoticon_table\'] = G5_TABLE_PREFIX.\'emoticon\'; // \uc774\ubaa8\ud2f0\ucf58 \ud14c\uc774\ube14\\n?>\\n```\\n\\n- \ub9e8 \ub9c8\uc9c0\ub9c9 \uc904\uc5d0 \ucf54\ub4dc\ub97c \ud55c \uc904 \ucd94\uac00\ud569\ub2c8\ub2e4.\\n\\n```php title=\\"adm/admin.menu300.php\\"\\n<?php\\n$menu[\'menu300\'] = array (\\n    array(\'300000\', \'\uac8c\uc2dc\ud310\uad00\ub9ac\', \'\'.G5_ADMIN_URL.\'/board_list.php\', \'board\'),\\n    array(\'300100\', \'\uac8c\uc2dc\ud310\uad00\ub9ac\', \'\'.G5_ADMIN_URL.\'/board_list.php\', \'bbs_board\'),\\n    array(\'300200\', \'\uac8c\uc2dc\ud310\uadf8\ub8f9\uad00\ub9ac\', \'\'.G5_ADMIN_URL.\'/boardgroup_list.php\', \'bbs_group\'),\\n    array(\'300600\', \'\ub0b4\uc6a9\uad00\ub9ac\', G5_ADMIN_URL.\'/contentlist.php\', \'scf_contents\', 1),\\n    // highlight-next-line\\n    array(\'300700\', \'\uc774\ubaa8\ud2f0\ucf58\uad00\ub9ac\', G5_ADMIN_URL.\'/emoticon_list.php\', \'mmb_emoticon\', 1)\\n);\\n?>\\n```\\n\\n- \ub9e8 \ub9c8\uc9c0\ub9c9 \uc904\uc5d0 \ucf54\ub4dc\ub97c \ucd94\uac00\ud569\ub2c8\ub2e4.\\n\\n## 3. \ucd94\uac00\ud574\uc57c\ud560 \ud30c\uc77c\\n\\n```php title=\\"adm/emoticon_form_update.php\\"\\n<?php\\n$sub_menu = \\"300700\\";\\ninclude_once(\'./_common.php\');\\n\\nauth_check($auth[$sub_menu], \'w\');\\ncheck_token();\\n\\n@mkdir(G5_DATA_PATH.\'/emoticon\', G5_DIR_PERMISSION);\\n@chmod(G5_DATA_PATH.\'/emoticon\', G5_DIR_PERMISSION);\\n\\nif ($img = $_FILES[\'me_img\'][\'name\']) {\\n    if (!preg_match(\\"/\\\\.(gif|jpg|png)$/i\\", $img)) {\\n        alert(\\"\uc774\ubaa8\ud2f0\ucf58 \uc774\ubbf8\uc9c0\uac00 gif, jpg, png \ud30c\uc77c\uc774 \uc544\ub2d9\ub2c8\ub2e4.\\");\\n    } else {\\n\\t\\t// \ud655\uc7a5\uc790 \ub530\uae30\\n\\t\\t$exp = explode(\\".\\", $_FILES[\'me_img\'][\'name\']);\\n\\t\\t$exp = $exp[count($exp)-1];\\n\\n\\t\\t$emoticon_path = G5_DATA_PATH.\'/emoticon\';\\n\\t\\t$emoticon_image_code = time().\\".\\".$exp;\\n\\t\\t$emoticon_image_path = \\"$emoticon_path/$emoticon_image_code\\";\\n\\t\\t$emoticon_image_url = \\"/data/emoticon/$emoticon_image_code\\";\\n\\n\\t\\tmove_uploaded_file($_FILES[\'me_img\'][\'tmp_name\'], $emoticon_image_path);\\n\\t\\tchmod($emoticon_image_path, 0606);\\n\\t\\t$sql_common = \\" , me_img = \'{$emoticon_image_url}\' \\";\\n\\t}\\n}\\nsql_query(\\" insert into {$g5[\'emoticon_table\']} set me_text = \'{$me_text}\'\\".$sql_common);\\n\\ngoto_url(\'./emoticon_list.php?\'.$qstr);\\n?>\\n```\\n\\n```php title=\\"adm/emoticon_list_update.php\\"\\n<?php\\n$sub_menu = \\"300700\\";\\ninclude_once(\'./_common.php\');\\n\\ncheck_demo();\\n\\nauth_check($auth[$sub_menu], \'d\');\\n\\ncheck_token();\\n\\n$count = count($_POST[\'chk\']);\\nif(!$count)\\n    alert($_POST[\'act_button\'].\' \ud558\uc2e4 \ud56d\ubaa9\uc744 \ud558\ub098 \uc774\uc0c1 \uccb4\ud06c\ud558\uc138\uc694.\');\\n\\nfor ($i=0; $i<$count; $i++)\\n{\\n    // \uc2e4\uc81c \ubc88\ud638\ub97c \ub118\uae40\\n    $k = $_POST[\'chk\'][$i];\\n\\n    // \uc774\ubaa8\ud2f0\ucf58 \ub4f1\ub85d \ub0b4\uc5ed\\n    $sql = \\" select * from {$g5[\'emoticon_table\']} where me_id = \'{$_POST[\'me_id\'][$k]}\' \\";\\n    $row = sql_fetch($sql);\\n\\n    if(!$row[\'me_id\'])\\n        continue;\\n\\n    // \uc774\ubaa8\ud2f0\ucf58 \ub0b4\uc5ed\uc0ad\uc81c\\n    $sql = \\" delete from {$g5[\'emoticon_table\']} where me_id = \'{$_POST[\'me_id\'][$k]}\' \\";\\n    sql_query($sql);\\n\\n\\t// \uc774\ubaa8\ud2f0\ucf58 \uc774\ubbf8\uc9c0 \uc0ad\uc81c\\n\\t@unlink(G5_PATH.$row[\'me_img\']);\\n}\\n\\ngoto_url(\'./emoticon_list.php?\'.$qstr);\\n?>\\n```\\n\\n```php title=\\"adm/emoticon_list.php\\"\\n<?php\\n$sub_menu = \\"300700\\";\\ninclude_once(\'./_common.php\');\\n\\nauth_check($auth[$sub_menu], \'r\');\\n\\n$token = get_token();\\n\\n$sql_common = \\" from {$g5[\'emoticon_table\']} \\";\\n\\n$sql_search = \\" where (1) \\";\\n\\nif (!$sst) {\\n\\t$sst  = \\"me_id\\";\\n\\t$sod = \\"desc\\";\\n}\\n$sql_order = \\" order by {$sst} {$sod} \\";\\n\\n$sql = \\" select count(*) as cnt\\n\\t\\t\\t{$sql_common}\\n\\t\\t\\t{$sql_search}\\n\\t\\t\\t{$sql_order} \\";\\n$row = sql_fetch($sql);\\n$total_count = $row[\'cnt\'];\\n\\n$rows = 18;\\n$total_page  = ceil($total_count / $rows);  // \uc804\uccb4 \ud398\uc774\uc9c0 \uacc4\uc0b0\\nif ($page < 1) $page = 1; // \ud398\uc774\uc9c0\uac00 \uc5c6\uc73c\uba74 \uccab \ud398\uc774\uc9c0 (1 \ud398\uc774\uc9c0)\\n$from_record = ($page - 1) * $rows; // \uc2dc\uc791 \uc5f4\uc744 \uad6c\ud568\\n\\n$sql = \\" select *\\n\\t\\t\\t{$sql_common}\\n\\t\\t\\t{$sql_search}\\n\\t\\t\\t{$sql_order}\\n\\t\\t\\tlimit {$from_record}, {$rows} \\";\\n$result = sql_query($sql);\\n\\n$listall = \'<a href=\\"\'.$_SERVER[\'PHP_SELF\'].\'\\" class=\\"ov_listall\\">\uc804\uccb4\ubaa9\ub85d</a>\';\\n\\n$g5[\'title\'] = \'\uc774\ubaa8\ud2f0\ucf58 \uad00\ub9ac\';\\ninclude_once (\'./admin.head.php\');\\n\\n$colspan = 9;\\n\\n$po_expire_term = \'\';\\nif($config[\'cf_point_term\'] > 0) {\\n\\t$po_expire_term = $config[\'cf_point_term\'];\\n}\\n\\n?>\\n\\n<h2 class=\\"h2_frm\\">\uc774\ubaa8\ud2f0\ucf58 \ubaa9\ub85d</h2>\\n\\n<div class=\\"local_ov01 local_ov\\">\\n\\t<?php echo $listall ?>\\n\\t\uc804\uccb4 <?php echo number_format($total_count) ?> \uac74\\n</div>\\n\\n<form name=\\"fpointlist\\" id=\\"fpointlist\\" method=\\"post\\" action=\\"./emoticon_list_update.php\\" onsubmit=\\"return fpointlist_submit(this);\\">\\n<input type=\\"hidden\\" name=\\"sst\\" value=\\"<?php echo $sst ?>\\">\\n<input type=\\"hidden\\" name=\\"sod\\" value=\\"<?php echo $sod ?>\\">\\n<input type=\\"hidden\\" name=\\"sfl\\" value=\\"<?php echo $sfl ?>\\">\\n<input type=\\"hidden\\" name=\\"stx\\" value=\\"<?php echo $stx ?>\\">\\n<input type=\\"hidden\\" name=\\"page\\" value=\\"<?php echo $page ?>\\">\\n<input type=\\"hidden\\" name=\\"token\\" value=\\"<?php echo $token ?>\\">\\n\\n<div class=\\"tbl_head01 tbl_wrap\\">\\n\\t<table>\\n\\t<caption><?php echo $g5[\'title\']; ?> \ubaa9\ub85d</caption>\\n\\t<colgroup>\\n\\t\\t<col style=\\"width: 50px;\\" />\\n\\t\\t<col style=\\"width: 120px;\\"/>\\n\\t\\t<col  />\\n\\t\\t<col style=\\"width: 50px;\\" />\\n\\t\\t<col style=\\"width: 120px;\\"/>\\n\\t\\t<col  />\\n\\t\\t<col style=\\"width: 50px;\\" />\\n\\t\\t<col style=\\"width: 120px;\\"/>\\n\\t\\t<col  />\\n\\t</colgroup>\\n\\t<thead>\\n\\t<tr>\\n\\t\\t<th scope=\\"col\\">\\n\\t\\t\\t<label for=\\"chkall\\" class=\\"sound_only\\">\uc774\ubaa8\ud2f0\ucf58 \ub0b4\uc5ed \uc804\uccb4</label>\\n\\t\\t\\t<input type=\\"checkbox\\" name=\\"chkall\\" value=\\"1\\" id=\\"chkall\\" onclick=\\"check_all(this.form)\\">\\n\\t\\t</th>\\n\\t\\t<th scope=\\"col\\">\uc774\ubbf8\uc9c0</th>\\n\\t\\t<th scope=\\"col\\">\uba85\ub839\uc5b4</th>\\n\\n\\t\\t<th scope=\\"col\\">&nbsp;</th>\\n\\t\\t<th scope=\\"col\\">\uc774\ubbf8\uc9c0</th>\\n\\t\\t<th scope=\\"col\\">\uba85\ub839\uc5b4</th>\\n\\n\\t\\t<th scope=\\"col\\">&nbsp;</th>\\n\\t\\t<th scope=\\"col\\">\uc774\ubbf8\uc9c0</th>\\n\\t\\t<th scope=\\"col\\">\uba85\ub839\uc5b4</th>\\n\\t</tr>\\n\\t</thead>\\n\\t<tbody>\\n\\t<?php\\n\\tfor ($i=0; $row=sql_fetch_array($result); $i++) {\\n\\t\\t$bg = \'bg\'.($i%2);\\n\\t?>\\n\\n<? if($i % 3 == 0) {\\n\\tif($i == 0) { echo \\"</tr>\\"; }\\n?>\\n\\t<tr class=\\"<?php echo $bg; ?>\\">\\n<? } ?>\\n\\n\\t\\t<td style=\\"text-align: center\\">\\n\\t\\t\\t<input type=\\"hidden\\" name=\\"me_id[<?php echo $i ?>]\\" value=\\"<?php echo $row[\'me_id\'] ?>\\" id=\\"me_id_<?php echo $i ?>\\">\\n\\t\\t\\t<input type=\\"checkbox\\" name=\\"chk[]\\" value=\\"<?php echo $i ?>\\" id=\\"chk_<?php echo $i ?>\\">\\n\\t\\t</td>\\n\\t\\t<td style=\\"text-align: center\\"><?php echo \\"<img src=\'\\".G5_URL.\\"{$row[\'me_img\']}\' alt=\'{$row[\'me_text\']}\'>\\"; ?></td>\\n\\t\\t<td class=\\"txt-left\\"><?php echo $row[\'me_text\']; ?></td>\\n\\t<?php\\n\\t}\\n\\n\\tif ($i == 0)\\n\\t\\techo \'<tr><td colspan=\\"\'.$colspan.\'\\" class=\\"empty_table\\">\uc790\ub8cc\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.</td></tr>\';\\n\\n\\tif($i%3) {\\n\\t\\tfor($j = 0; $j < 3-($i%3); $j++) {\\n\\t\\t\\techo \\"<td></td><td></td><td></td>\\";\\n\\t\\t}\\n\\t}\\n\\n\\tif($i > 0) { echo \\"</tr>\\"; }\\n\\t?>\\n\\t</tbody>\\n\\t</table>\\n</div>\\n\\n<div class=\\"btn_list01 btn_list\\">\\n\\t<input type=\\"submit\\" name=\\"act_button\\" value=\\"\uc120\ud0dd\uc0ad\uc81c\\" onclick=\\"document.pressed=this.value\\">\\n</div>\\n\\n</form>\\n\\n<?php echo get_paging(G5_IS_MOBILE ? $config[\'cf_mobile_pages\'] : $config[\'cf_write_pages\'], $page, $total_page, \\"{$_SERVER[\'PHP_SELF\']}?$qstr&amp;page=\\"); ?>\\n\\n<section id=\\"point_mng\\">\\n\\t<h2 class=\\"h2_frm\\">\uc774\ubaa8\ud2f0\ucf58 \ub4f1\ub85d</h2>\\n\\n\\t<form name=\\"fpointlist2\\" method=\\"post\\" id=\\"fpointlist2\\" action=\\"./emoticon_form_update.php\\" autocomplete=\\"off\\" enctype=\\"multipart/form-data\\">\\n\\t<input type=\\"hidden\\" name=\\"sfl\\" value=\\"<?php echo $sfl ?>\\">\\n\\t<input type=\\"hidden\\" name=\\"stx\\" value=\\"<?php echo $stx ?>\\">\\n\\t<input type=\\"hidden\\" name=\\"sst\\" value=\\"<?php echo $sst ?>\\">\\n\\t<input type=\\"hidden\\" name=\\"sod\\" value=\\"<?php echo $sod ?>\\">\\n\\t<input type=\\"hidden\\" name=\\"page\\" value=\\"<?php echo $page ?>\\">\\n\\t<input type=\\"hidden\\" name=\\"token\\" value=\\"<?php echo $token ?>\\">\\n\\n\\t<div class=\\"tbl_frm01 tbl_wrap\\">\\n\\t\\t<table>\\n\\t\\t<colgroup>\\n\\t\\t\\t<col style=\\"width: 120px;\\">\\n\\t\\t\\t<col>\\n\\t\\t</colgroup>\\n\\t\\t<tbody>\\n\\t\\t<tr>\\n\\t\\t\\t<th scope=\\"row\\"><label for=\\"me_text\\">\uc774\ubaa8\ud2f0\ucf58 \uba85\ub839\uc5b4<strong class=\\"sound_only\\">\ud544\uc218</strong></label></th>\\n\\t\\t\\t<td><input type=\\"text\\" name=\\"me_text\\" id=\\"me_text\\" class=\\"required frm_input\\" required></td>\\n\\t\\t</tr>\\n\\t\\t<tr>\\n\\t\\t\\t<th scope=\\"row\\"><label for=\\"me_img\\">\uc774\ubbf8\uc9c0<strong class=\\"sound_only\\">\ud544\uc218</strong></label></th>\\n\\t\\t\\t<td><input type=\\"file\\" name=\\"me_img\\" id=\\"me_img\\"></td>\\n\\t\\t</tr>\\n\\t\\t</tbody>\\n\\t\\t</table>\\n\\t</div>\\n\\n\\t<div class=\\"btn_confirm01 btn_confirm\\">\\n\\t\\t<input type=\\"submit\\" value=\\"\ud655\uc778\\" class=\\"btn_submit\\">\\n\\t</div>\\n\\n\\t</form>\\n\\n</section>\\n\\n<script>\\nfunction fpointlist_submit(f)\\n{\\n\\tif (!is_checked(\\"chk[]\\")) {\\n\\t\\talert(document.pressed+\\" \ud558\uc2e4 \ud56d\ubaa9\uc744 \ud558\ub098 \uc774\uc0c1 \uc120\ud0dd\ud558\uc138\uc694.\\");\\n\\t\\treturn false;\\n\\t}\\n\\n\\tif(document.pressed == \\"\uc120\ud0dd\uc0ad\uc81c\\") {\\n\\t\\tif(!confirm(\\"\uc120\ud0dd\ud55c \uc790\ub8cc\ub97c \uc815\ub9d0 \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?\\")) {\\n\\t\\t\\treturn false;\\n\\t\\t}\\n\\t}\\n\\n\\treturn true;\\n}\\n<\/script>\\n\\n<?php\\ninclude_once (\'./admin.tail.php\');\\n?>\\n\\n```\\n\\n## 3. \uacb0\uacfc \ud655\uc778\\n\\n### \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\\n\\n- \uad00\ub9ac\uc790 \ud398\uc774\uc9c0\uc5d0 `\uc774\ubaa8\ud2f0\ucf58 \uad00\ub9ac`\uac00 \uc0dd\uacbc\uc2b5\ub2c8\ub2e4.\\n  ![admin](./admin1.png)\\n\\n- \ub123\uace0 \uc2f6\uc740 \uc544\uc774\ucf58\uc744 \uc785\ub825\ud558\uace0 \uba85\ub839\uc5b4\ub3c4 `/`\uc640 \ud568\uaed8 \uc801\uc5b4\uc90d\ub2c8\ub2e4.\\n  ![add-imo](./admin2.png)\\n- \uc6b0\uce21 \uc0c1\ub2e8\uc5d0 `\ub4f1\ub85d`\uc744 \ub20c\ub7ec\uc8fc\uba74 \ub4f1\ub85d \uc131\uacf5!\\n  ![submit-imo](./admin3.png)\\n\\n### \uac8c\uc2dc\ud310\uc5d0\uc11c \uc368\ubcf4\uae30\\n\\n- [\uc774\ubaa8\ud2f0\ucf58]\uc744 \ub204\ub974\uba74 \ub4f1\ub85d\ub41c \uc774\ubaa8\ud2f0\ucf58 \ubaa9\ub85d\uc774 \ubcf4\uc785\ub2c8\ub2e4.  \\n  ![imo-list](./admin4.png)\\n\\n- \ub313\uae00\ucc3d\uc5d0 \uc544\uae4c \uc37c\ub358 \uc774\ubaa8\ud2f0\ucf58 \uba85\ub839\uc5b4`(ex: /test)`\ub97c \uc0ac\uc6a9\ud55c \ub4a4 \ub4f1\ub85d\ud558\uba74 \uc774\ubaa8\ud2f0\ucf58\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n  ![imo-list](./admin5.png)\\n\\n## Reference\\n\\n- [\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ub9c8\uc2a4\ud130](https://github.com/tateck-develop/AvocadoEdition/tree/master/AvocadoEdition/adm)\\n- [\uc544\ubcf4\uce74\ub3c4 \uc5d0\ub514\uc158 \ud37c\uc2a4\ub110](https://extrashot.postype.com/post/12533518)"}]}')}}]);