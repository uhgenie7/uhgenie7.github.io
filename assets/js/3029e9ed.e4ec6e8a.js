"use strict";(self.webpackChunkgenie_log=self.webpackChunkgenie_log||[]).push([[896],{9397:n=>{n.exports=JSON.parse('{"blogPosts":[{"id":"/rsa-ssh-host-key","metadata":{"permalink":"/fixed/rsa-ssh-host-key","source":"@site/fixed/rsa-ssh-host-key.md","title":"\uae43\ud5c8\ube0c \ud478\uc2dc \uc2dc, IDENTIFICATION \uacbd\uace0\uac00 \ub730 \ub54c","description":"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!","date":"2023-03-24T00:00:00.000Z","formattedDate":"2023\ub144 3\uc6d4 24\uc77c","tags":[{"label":"rsa-ssh","permalink":"/fixed/tags/rsa-ssh"}],"readingTime":1.34,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\uae43\ud5c8\ube0c \ud478\uc2dc \uc2dc, IDENTIFICATION \uacbd\uace0\uac00 \ub730 \ub54c","description":"WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!","tags":["rsa-ssh"],"date":"2023-03-24"},"nextItem":{"title":"Google Play\uc758 \ub300\uc0c1 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d \ucda9\uc871\ud558\uae30","permalink":"/fixed/rn_android12_deploy_error"}},"content":"```bash\\ngit push origin main\\n\\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\\n@    WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!     @\\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\\n\\nIT IS POSSIBLE THAT SOMEONE IS DOING SOMETHING NASTY!\\nSomeone could be eavesdropping on you right now (man-in-the-middle attack)!\\nIt is also possible that a host key has just been changed.\\nThe fingerprint for the RSA key sent by the remote host is\\nSHA256:~\\nPlease contact your system administrator.\\n\\nAdd correct host key in /Users/niege/.ssh/known_hosts to get rid of this message.\\nOffending RSA key in /Users/niege/.ssh/known_hosts:2\\n\\nRSA host key for github.com has changed and you have requested strict checking.\\nHost key verification failed.\\nfatal: Could not read from remote repository.\\n\\nPlease make sure you have the correct access rights\\nand the repository exists.\\n```\\n\\n1. \uc774\uc804 \ud0a4\ub97c \uc81c\uac70\ud55c\ub2e4.\\n\\n```bash\\nssh-keygen -R github.com\\n```\\n\\n:::note \ud130\ubbf8\ub110\\n\\n```bash\\nssh-keygen -R github.com\\n# Host github.com found: line 2\\n/Users/niege/.ssh/known_hosts updated.\\nOriginal contents retained as /Users/niege/.ssh/known_hosts.old\\n```\\n\\n:::\\n\\n2. \uc0c8 RSA SSH \uacf5\uac1c\ud0a4 \ud56d\ubaa9\uc744 \ucd94\uac00\ud55c\ub2e4.\\n\\n```bash\\nssh-keygen -R github.com\\ncurl -L https://api.github.com/meta | jq -r \'.ssh_keys | .[]\' | sed -e \'s/^/github.com /\' >> ~/.ssh/known_hosts\\n```\\n\\n\uc774\ub54c \'zsh: command not found: jq\' \ub77c\uace0 \ub72c\ub2e4\uba74, jq\ub97c \ub530\ub85c \uc124\uce58\ud574\uc8fc\uc5b4\uc57c \ud55c\ub2e4.\\n\\n```bash\\nbrew install jq\\n```\\n\\n3. \ub2e4\uc2dc \ud478\uc2dc\ud574\ubcf8\ub2e4.\\n\\n```\\nAre you sure you want to continue connecting (yes/no/[fingerprint])? yes\\nAre you sure you want to continue connecting (yes/no)? yes\\n```\\n\\n## \ucc38\uc870\\n\\n[RSA SSH \ud638\uc2a4\ud2b8 \ud0a4\ub97c \uc5c5\ub370\uc774\ud2b8\ud588\uc2b5\ub2c8\ub2e4.](https://github.blog/2023-03-23-we-updated-our-rsa-ssh-host-key/)"},{"id":"/rn_android12_deploy_error","metadata":{"permalink":"/fixed/rn_android12_deploy_error","source":"@site/fixed/rn_android12_deploy_error.md","title":"Google Play\uc758 \ub300\uc0c1 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d \ucda9\uc871\ud558\uae30","description":"react-native \uae30\ubc18 \uc571\uc744 Google Play \ud504\ub85c\ub355\uc158 \ubaa8\ub4dc\uc5d0 \ub4f1\ub85d\ud558\ub824\uace0 \ud560 \ub54c \uc548\ub4dc\ub85c\uc774\ub4dc 11\uc744 \uc4f0\uace0 \uc788\ub2e4\uba74 \ubc18\ub824\ub41c\ub2e4","date":"2023-02-07T00:00:00.000Z","formattedDate":"2023\ub144 2\uc6d4 7\uc77c","tags":[{"label":"react-native","permalink":"/fixed/tags/react-native"},{"label":"google-play","permalink":"/fixed/tags/google-play"},{"label":"android12","permalink":"/fixed/tags/android-12"}],"readingTime":1.21,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"Google Play\uc758 \ub300\uc0c1 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d \ucda9\uc871\ud558\uae30","description":"react-native \uae30\ubc18 \uc571\uc744 Google Play \ud504\ub85c\ub355\uc158 \ubaa8\ub4dc\uc5d0 \ub4f1\ub85d\ud558\ub824\uace0 \ud560 \ub54c \uc548\ub4dc\ub85c\uc774\ub4dc 11\uc744 \uc4f0\uace0 \uc788\ub2e4\uba74 \ubc18\ub824\ub41c\ub2e4","tags":["react-native","google-play","android12"],"date":"2023-02-07"},"prevItem":{"title":"\uae43\ud5c8\ube0c \ud478\uc2dc \uc2dc, IDENTIFICATION \uacbd\uace0\uac00 \ub730 \ub54c","permalink":"/fixed/rsa-ssh-host-key"},"nextItem":{"title":"2022-11-04 \uc774\ud6c4 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec","permalink":"/fixed/rn_android_build_error"}},"content":"2023\ub144 1\uc6d4 \uc774\ud6c4, \uc571\uc744 \ubc84\uc804 \uc5c5\ub370\uc774\ud2b8 \ud55c \ub4a4 \uad6c\uae00 \ud50c\ub808\uc774\uc5d0 \ub4f1\ub85d\ud558\ub824\uace0 \ud558\uba74 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d\uc744 \ucda9\uc871\ud574\ub2ec\ub77c\ub294 \ubd89\uc740 \uae00\uc528\uac00 \ub739\ub2c8\ub2e4.\\n\\n\uba87 \uac00\uc9c0 \uc124\uc815\uc744 \ub354\ud55c \ub4a4 \uc571\uc744 \uad6c\uae00 \ud50c\ub808\uc774\uc5d0 \uc5c5\ub85c\ub4dc \ud574\ubd05\uc2dc\ub2e4.\\n\\n\x3c!--truncate--\x3e\\n\\n:::note Environment Info:\\n\\n```\\nnpmPackages:\\n    react-native: \\"0.67.5\\"\\n```\\n\\n:::\\n\\n[\uad6c\uae00\uc774 \uc548\ub0b4\ud558\ub294 \ubb38\uc11c](https://developer.android.com/google/play/requirements/target-sdk?hl=ko)\ub97c \ubcf4\uba74, \uc2e0\uaddc \uc571\uc740 Android 12(API \uc218\uc900 31) \uc774\uc0c1\uc744 \ud0c0\uac9f\ud305\ud574\uc57c \ud55c\ub2e4\uace0 \uc548\ub0b4\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n### 1. android/build.gradle \ubc84\uc804 \uc218\uc815\\n\\ncompileSdkVersion\uc640 targetSdkVersion\ub97c \uac01\uac01 31\ub85c \uc5c5\ub370\uc774\ud2b8 \ud569\ub2c8\ub2e4.\\n\\n```bash title=\\"android/build.gradle\\"\\nbuildscript {\\n    // ...\\n        compileSdkVersion = 31\\n        targetSdkVersion = 31\\n    // ...\\n}\\n```\\n\\n### 2. android/app/build.gradle \ucf54\ub4dc \ucd94\uac00\\n\\n```bash title=\\"android/app/build.gradle\\"\\ndependencies {\\n    // ...\\n    implementation \'androidx.work:work-runtime:2.7.1\'\\n    // ...\\n}\\n```\\n\\n### 3. android/app/src/main/AndroidManifest.xml \ucf54\ub4dc \uc218\uc815\\n\\n```bash title=\\"android/app/src/main/AndroidManifest.xml\\"\\n      <activity\\n        // ...\\n        android:exported=\\"true\\"\\n        >\\n        <intent-filter>\\n            <action android:name=\\"android.intent.action.MAIN\\" />\\n            <category android:name=\\"android.intent.category.LAUNCHER\\" />\\n        </intent-filter>\\n      </activity>\\n```\\n\\n## \ucc38\uc870\\n\\n- [Google Play\uc758 \ub300\uc0c1 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d \ucda9\uc871\ud558\uae30](https://developer.android.com/google/play/requirements/target-sdk?hl=ko)\\n- [\ub354 \uc548\uc804\ud55c \uad6c\uc131\uc694\uc18c \ub0b4\ubcf4\ub0b4\uae30](https://developer.android.com/about/versions/12/behavior-changes-12?hl=ko#exported)"},{"id":"/rn_android_build_error","metadata":{"permalink":"/fixed/rn_android_build_error","source":"@site/fixed/rn_android_build_error.md","title":"2022-11-04 \uc774\ud6c4 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec","description":"Execution failed for task \u2018:app:checkDebugAarMetadata\u2019.","date":"2022-11-07T00:00:00.000Z","formattedDate":"2022\ub144 11\uc6d4 7\uc77c","tags":[{"label":"react-native","permalink":"/fixed/tags/react-native"}],"readingTime":0.76,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"2022-11-04 \uc774\ud6c4 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec","description":"Execution failed for task \u2018:app:checkDebugAarMetadata\u2019.","tags":["react-native"],"date":"2022-11-07"},"prevItem":{"title":"Google Play\uc758 \ub300\uc0c1 API \uc218\uc900 \uc694\uad6c\uc0ac\ud56d \ucda9\uc871\ud558\uae30","permalink":"/fixed/rn_android12_deploy_error"},"nextItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c Couldn\'t find a navigation object \uc5d0\ub7ec","permalink":"/fixed/rn-navigation-container-error"}},"content":"2022-11-4\uc77c\uc5d0 \uc77c\uc5b4\ub09c \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec.\\nRN \uc885\uc18d\uc131 \ubb38\uc81c\uc774\ubbc0\ub85c \ud56b\ud53d\uc2a4\ub97c \uc801\uc6a9\ud558\uc138\uc694.\\n\\n\x3c!--truncate--\x3e\\n\\n\uba40\uca61\ud788 \uc798 \ub418\ub358 \uc571\uc774 2022-11-4 \uc774\ud6c4 \uac11\uc790\uae30 \ube4c\ub4dc\uc5d0 \ud398\uc77c\uc774 \ub0ac\ub2e4\uba74 \uc885\uc18d\uc131 \ubb38\uc81c\uc77c \uac00\ub2a5\uc131\uc774 \ub192\uc2b5\ub2c8\ub2e4.\\n\\n### \ud130\ubbf8\ub110\\n\\n```bash\\nexecution failed for task \':app:checkdebugaarmetadata\'. > multiple task action failures occurred:\\n```\\n\\n### \ud574\uacb0\ubc29\ubc95\\n\\n- [READ ME](https://github.com/facebook/react-native/issues/35210)\\n\\n\uc6b0\ub9ac\uac00 \uc0ac\uc6a9\ud558\uace0 \uc788\ub358 RN \ubc84\uc804\uc740 \\"0.67.2\\" \ubc84\uc804\uc73c\ub85c 0.67.5 \ubc84\uc804\uc73c\ub85c hotfix\ub97c \ud574\uc57c\ud588\ub2e4.\\n\\n```bash title=\\"RN \uc5c5\uadf8\ub808\uc774\ub4dc\\"\\n yarn upgrade react-native@v0.67.5\\n```\\n\\n```bash title=\\"gradlew \uce90\uc2dc \uc0ad\uc81c\\"\\n./gradlew clean\\n```\\n\\n\uc774\ud6c4 \ub2e4\uc2dc build \ud558\uba74 \ub41c\ub2e4."},{"id":"/rn-navigation-container-error","metadata":{"permalink":"/fixed/rn-navigation-container-error","source":"@site/fixed/rn-navigation-container-error.md","title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c Couldn\'t find a navigation object \uc5d0\ub7ec","description":"Couldn\'t find a navigation object. Is your component inside NavigationContainer?","date":"2022-10-20T00:00:00.000Z","formattedDate":"2022\ub144 10\uc6d4 20\uc77c","tags":[{"label":"react-native","permalink":"/fixed/tags/react-native"}],"readingTime":0.425,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c Couldn\'t find a navigation object \uc5d0\ub7ec","description":"Couldn\'t find a navigation object. Is your component inside NavigationContainer?","tags":["react-native"],"date":"2022-10-20"},"prevItem":{"title":"2022-11-04 \uc774\ud6c4 \ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \uc548\ub4dc\ub85c\uc774\ub4dc \ube4c\ub4dc \uc5d0\ub7ec","permalink":"/fixed/rn_android_build_error"},"nextItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \ube4c\ub4dc \uc5d0\ub7ec","permalink":"/fixed/rn-build-fail"}},"content":"NavigationContainer \ub97c \ubd84\uba85 \ub123\uc5b4\uc8fc\uc5c8\uace0, \uc798\ub9cc \ub3cc\uc544\uac00\ub358 RN\uc774 \uac11\uc790\uae30 \uc5d0\ub7ec\ub97c \ubfdc\uc744 \ub54c.\\n\\n\x3c!--truncate--\x3e\\n\\n### \ud130\ubbf8\ub110\\n\\n`Error: Couldn\'t find a navigation object. Is your component inside NavigationContainer?`\\n\\n### \ud574\uacb0\ubc95\\n\\n`@react-navigation/core` \ub85c import \ud574\uc624\ub294 hook\uc774\ub098 type\uc774 \uc788\ub2e4\uba74,\\n`@react-navigation/native`\ub85c \ubc14\uafd4\uc900\ub2e4.\\n\\nex)\\n\\n```\\nimport { useFocusEffect } from \'@react-navigation/core\'; // xxxx\\nimport { useFocusEffect } from \'@react-navigation/native\'; // oooo\\n```"},{"id":"/rn-build-fail","metadata":{"permalink":"/fixed/rn-build-fail","source":"@site/fixed/rn-build-fail.md","title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \ube4c\ub4dc \uc5d0\ub7ec","description":"INSTALL_FAILED_VERSION_DOWNGRADE","date":"2022-10-19T00:00:00.000Z","formattedDate":"2022\ub144 10\uc6d4 19\uc77c","tags":[{"label":"react-native","permalink":"/fixed/tags/react-native"}],"readingTime":0.415,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \ube4c\ub4dc \uc5d0\ub7ec","description":"INSTALL_FAILED_VERSION_DOWNGRADE","tags":["react-native"],"date":"2022-10-19"},"prevItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c Couldn\'t find a navigation object \uc5d0\ub7ec","permalink":"/fixed/rn-navigation-container-error"},"nextItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c RSScreen \uc5d0\ub7ec","permalink":"/fixed/rnsscreen-error"}},"content":"\uae30\uc874\uc5d0 \uc124\uce58\ub41c \uc571\uc774 \uc788\ub2e4\uba74 \uc0ad\uc81c \ud6c4 \uc7ac\ube4c\ub4dc\ud558\uc790.\\n\\n\x3c!--truncate--\x3e\\n\\n### \ud130\ubbf8\ub110\\n\\n```bash\\nBUILD FAILED in 37s\\n\\nerror Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup.\\nError: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081\\nUnable to install /Users/project/android/app/build/outputs/apk/debug/app-debug.apk\\ncom.android.ddmlib.InstallException: INSTALL_FAILED_VERSION_DOWNGRADE\\n```\\n\\n### \ud574\uacb0\ubc29\ubc95\\n\\n\uae30\uc874\uc5d0 \uc124\uce58\ub41c \uc571\uc774 \uc788\ub2e4\uba74 \uc0ad\uc81c \ud6c4 \uc7ac\ube4c\ub4dc\ud558\uc790."},{"id":"/rnsscreen-error","metadata":{"permalink":"/fixed/rnsscreen-error","source":"@site/fixed/rnsscreen-error.md","title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c RSScreen \uc5d0\ub7ec","description":"RNSScreen\\" was not found in the UIManager.","date":"2022-10-19T00:00:00.000Z","formattedDate":"2022\ub144 10\uc6d4 19\uc77c","tags":[{"label":"react-native","permalink":"/fixed/tags/react-native"}],"readingTime":1.035,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c RSScreen \uc5d0\ub7ec","description":"RNSScreen\\" was not found in the UIManager.","tags":["react-native"],"date":"2022-10-19"},"prevItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c \ube4c\ub4dc \uc5d0\ub7ec","permalink":"/fixed/rn-build-fail"},"nextItem":{"title":"\ub2e4\ud06c\ubaa8\ub4dc \ud1a0\uae00 \uc2dc, \ud3f0\ud2b8\uac00 \uae5c\ube61\uc774\ub294 \ud604\uc0c1 (Feat. Styled-Component)","permalink":"/fixed/fout"}},"content":"\uce90\uc2dc\ub97c \uc9c0\uc6b0\uac70\ub098 \ud328\ud0a4\uc9c0 \ubc84\uc804\uc744 \uc62c\ub824\uc8fc\uc138\uc694.\\n\\n\x3c!--truncate--\x3e\\n\\n### \ud130\ubbf8\ub110\\n\\nInvariant Violation: requireNativeComponent: \\"RNSScreen\\" was not found in the UIManager.\\n\\nThis error is located at:\\nin RNSScreen (at createAnimatedComponent.js:211)\\n\\n### \uc6d0\uc778\\n\\n\uc77c\ubc18\uc801\uc73c\ub85c \uc2e4\ud589 \uc911\uc778 \uc571\uc744 \uc885\ub8cc\ud558\uc9c0 \uc54a\uace0 \ud328\ud0a4\uc9c0\ub97c \ucd94\uac00\ud588\uc744 \ub54c, \ud639\uc740 git merge, fetch \ub4f1\uc744 \ud588\uc744 \ub54c \ubc1c\uc0dd\ud55c\ub2e4.\\n\\n### \ud574\uacb0\\n\\n#### 1. \uccab \ubc88\uc9f8 \ubc29\ubc95\\n\\n`node-modules` \ud3f4\ub354\ub97c \ub2e4\uc2dc \uc9c0\uc6b4 \ud6c4 `yarn install` \ub610\ub294 `npm install`\uc744 \ud55c\ub2e4. \uadf8 \ud6c4 \ub2e4\uc2dc \uc2e4\ud589\uc2dc\ucf1c\ubcf8\ub2e4.\\n\\n#### 2. \ub450 \ubc88\uc9f8 \ubc29\ubc95\\n\\n`npx react-native start --reset-cache` \ub85c \uce90\uc2dc\ub97c \uc5c6\uc560\ubcf8\ub2e4\\n\\n#### 3. \uc138 \ubc88\uc9f8 \ubc29\ubc95\\n\\n```\\ncd android\\n./gradlew clean\\n\\n```\\n\\n\ub85c \uc548\ub4dc\ub85c\uc774\ub4dc \uce90\uc2dc\ub97c \uc5c6\uc560\ubcf8\ub2e4\\n\uc774\ud6c4 \ub2e4\uc2dc \uc2e4\ud589\uc2dc\ucf1c\ubcf8\ub2e4\\n\\n#### 4. \uc774\ub807\uac8c \ud574\ub3c4 \uc548\ub41c\ub2e4\uba74 \uce90\uc2dc\ubb38\uc81c\uac00 \uc544\ub2d9\ub2c8\ub2e4!\\n\\n`\\"react-native-screens\\": \\"3.18.2\\"` \ubc84\uc804\uc73c\ub85c \uc5c5\ub370\uc774\ud2b8 \ud55c\ub2e4.\\n\\n[\ub9c1\ud06c](https://github.com/software-mansion/react-native-screens/issues/1614#issuecomment-1276245207)"},{"id":"/fout","metadata":{"permalink":"/fixed/fout","source":"@site/fixed/fout/index.md","title":"\ub2e4\ud06c\ubaa8\ub4dc \ud1a0\uae00 \uc2dc, \ud3f0\ud2b8\uac00 \uae5c\ube61\uc774\ub294 \ud604\uc0c1 (Feat. Styled-Component)","description":"\uacb0\ub860\uc801\uc73c\ub85c Styled-Component \uc124\uc815 \ubb38\uc81c","date":"2022-09-06T00:00:00.000Z","formattedDate":"2022\ub144 9\uc6d4 6\uc77c","tags":[{"label":"fout","permalink":"/fixed/tags/fout"},{"label":"styled-component","permalink":"/fixed/tags/styled-component"}],"readingTime":4.93,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\ub2e4\ud06c\ubaa8\ub4dc \ud1a0\uae00 \uc2dc, \ud3f0\ud2b8\uac00 \uae5c\ube61\uc774\ub294 \ud604\uc0c1 (Feat. Styled-Component)","description":"\uacb0\ub860\uc801\uc73c\ub85c Styled-Component \uc124\uc815 \ubb38\uc81c","tags":["fout","styled-component"],"date":"2022-09-06"},"prevItem":{"title":"\ub9ac\uc561\ud2b8 \ub124\uc774\ud2f0\ube0c RSScreen \uc5d0\ub7ec","permalink":"/fixed/rnsscreen-error"},"nextItem":{"title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","permalink":"/fixed/img-onerror"}},"content":"## 1. \uc0ac\uac74\uc758 \ubc1c\ub2e8\\n\\n\uc804\uc5d4 \ubabb \ubcf8 \uac70 \uac19\uc740\ub370 \ub2e4\ud06c\ubaa8\ub4dc \ubc84\ud2bc\uc744 \ud1a0\uae00\ud560 \ub54c, \ud3f0\ud2b8\uac00 \uae5c\ube61\uc774\ub294 \ud604\uc0c1\uc744 \ubaa9\uaca9.\\n\\n\uac00\uc7a5 \uba3c\uc800 \ub4e0 \uc0dd\uac01\uc740 \uc774\uac8c \ub9d0\ub85c\ub9cc \ub4e3\ub358 FOUC (\'style\uc774 \uc801\uc6a9\ub418\uc9c0 \uc54a\uc740 \ub0b4\uc6a9\'\uc774 \'\uae5c\ube61\'\uc774\ub294 \ud604\uc0c1) \uc778\uac00? \ub77c\ub294 \uc0dd\uac01\uc5d0 \ub3c4\ub2ec\ud568\\n\\n\uadf8\ub7ec\ub098 \uc5c4\ubc00\ud788 \ub9d0\ud574, \ud3f0\ud2b8\ub9cc \uc774\ub7f0 \ubaa8\uc2b5\uc744 \ubcf4\uc774\uace0 \uc788\ub294 \uac83 \uac19\uc544\uc11c FOUT(\ud14d\uc2a4\ud2b8\uac00 \uae5c\ube61\uc5ec\ubcf4\uc774\ub294 \ud604\uc0c1. \uc989, \ube0c\ub77c\uc6b0\uc800\uac00 \uc6f9 \uae00\uaf34\uc744 \ub2e4\uc6b4\ub85c\ub4dc\ud558\uae30 \uc804\uc5d0 \ud14d\uc2a4\ud2b8\uac00 \ub300\uccb4 \uae00\uaf34\ub85c \ub80c\ub354\ub9c1\ub418\ub294 \ud604\uc0c1)\uc73c\ub85c \ucd94\uce21\ud588\uc74c\\n\\n\ub9d0\ub85c\ub9cc \ub4e3\ub358 FOUT\ub97c \ubaa9\uaca9\ud558\ub294 \uac74 \ucc98\uc74c\uc774\ub77c \ub2f9\ud669\uc2a4\ub7ec\uc6b0\uba74\uc11c\ub3c4 \uc2e0\ub098\uac8c \ubc84\uadf8\ub97c \ud574\uacb0\ud558\uae30\ub85c \uacb0\uc2ec\\n\\n## 2. \ud574\uacb0 \ubc29\ubc95\uc744 \ucc3e\uc544\ubcf4\uc790\\n\\n### 1) \uae00\uaf34 \ub85c\ub4dc\ud558\ub294\ub370 \uc2dc\uac04\uc774 \uc624\ub798 \uac78\ub824\uc11c\uc77c\uae4c?\\n\\n- [\uae00\uaf34 \ub85c\ub4dc \uc911 \ubcf4\uc774\uc9c0 \uc54a\ub294 \ud14d\uc2a4\ud2b8 \ubc29\uc9c0](https://web.dev/avoid-invisible-text/)\\n  - \ud574\ub2f9 \uae00\uc740 font-display\ub97c \uc18c\uac1c\ud558\uace0 \uc788\ub2e4. \uc774 css\ub97c \uc0ac\uc6a9\ud558\uba74 \uae00\uaf34\uc774 \uc900\ube44\ub418\uc9c0 \uc54a\uc558\uc744 \uacbd\uc6b0, \uac01 \ube0c\ub77c\uc6b0\uc800\uac00 \uc5b4\ub5bb\uac8c \ub300\uc751\ud558\ub294\uc9c0 \uc54c\ub824\uc8fc\uace0 \uc788\ub2e4.\\n  - \uae00\uc744 \ucc38\uc870\ud558\uc5ec \ucf54\ub4dc\ub97c [\uc218\uc815](https://github.com/uhgenie7/portfolio2022/commit/1824116ddd63fdc6baec07ce84e43e75e9d3ddfa)\ud574\ubcf4\uc558\ub2e4.\\n  - [\ub514\ubc84\uae45](https://github.com/uhgenie7/portfolio2022/commit/23a3c7b13ef6f16a395320bbbe323a55de1dde97)\ub3c4 \ud574\ubcf4\uc558\ub2e4.\\n\\n\uadf8\ub7ec\ub098 \ud574\uacb0\ub418\uc9c0 \uc54a\uc558\ub2e4. \ub77c\uc774\ube0c\ub7ec\ub9ac\ub85c \ud14c\uc2a4\ud2b8\ub97c \ud588\uc744 \ub54c, \uc544\uc8fc \uc798 \ub80c\ub354\ub9c1\ub418\uace0 \uc788\uc5c8\uace0 \uc5ec\uc804\ud788 \ud3f0\ud2b8 \uae5c\ube61\uc784 \ud604\uc0c1\uc740 \ub0a8\uc544\uc788\uc5c8\ub2e4.\\n\\n### 2) \uc560\ucd08\uc5d0 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud3f0\ud2b8\ub97c \uc9c0\uc815\ud574\uc8fc\uc5c8\ub294\ub370?\\n\\n\ucc98\uc74c\ubd80\ud130 \uc774\ub7f0 \uc77c\uc774 \uc0dd\uae34 \uac74 \uc544\ub2c8\uc5c8\ub2e4. \ubd84\uba85 \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud3f0\ud2b8\ub97c \uc9c0\uc815\ud55c \ub4a4\uc5d0 \uc774\ub7f0 \uc77c\uc774 \uc0dd\uacbc\ub2e4\ub294 \uac83\uc744 \ubc1c\uacac\ud560 \uc218 \uc788\uc5c8\ub2e4.  \\n\uadfc\ubcf8\uc801\uc73c\ub85c, \ud3f0\ud2b8 \ub80c\ub354\ub9c1\uc5d0 \ubb38\uc81c\uac00 \uc788\uc744 \uac83\uc774\ubbc0\ub85c, \ub0b4\uac00 \uc5b4\ub5bb\uac8c \uc0ac\uc6a9\uc790 \uc9c0\uc815 \ud3f0\ud2b8\ub97c \uc9c0\uc815\ud574\uc8fc\uc5c8\ub294\uc9c0 \ud655\uc778\ud574\ubcf8 \uacb0\uacfc, Styled-Component\uc5d0\uc11c `globalstyle\ub85c font-family\ub97c \uc900 \uac83`\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4.\\n\\n- [\ucf54\ub4dc](https://github.com/uhgenie7/portfolio2022/commit/b76a076edf5f96a07c21ce9ddfb4cdd93d1862a9)\\n\\n```ts title=\\"src/styles/globalStyle.ts\\"\\nconst GlobalStyle = createGlobalStyle`\\n  ${reset};\\n  ${variables};\\n  @font-face {\\n    font-family: \'Pretendard-Regular\';\\n    src: url(\'/fonts/PretendardVariable.ttf\') format(\'woff\');\\n    font-weight: 400;\\n    font-style: normal;\\n  }\\n\\n  html,\\n  body {\\n\\t@@ -13,8 +20,9 @@ const GlobalStyle = createGlobalStyle`\\n    color: ${({ theme }) => theme.textColor};\\n    width: 100%;\\n    scroll-behavior: smooth;\\n    font-family: Pretendard-Regular, -apple-system, sans-serif;\\n  }\\n`\\n```\\n\\n### 3) styled-component\ub97c \uc798\ubabb \uc4f0\uace0 \uc788\uc5c8\ub358 \uac8c \uc544\ub2d0\uae4c?\\n\\n\uc544\ub2c8\ub098 \ub2e4\ub97c\uae4c, \ub098\uc640 \uac19\uc740 \ubb38\uc81c\ub97c \uacaa\uace0 \uc788\ub294 \uc0ac\ub78c\uc774 \uc874\uc7ac\ud588\ub2e4.\\n\\n- [\ud574\ub2f9 \uc774\uc288](https://github.com/styled-components/styled-components/issues/1593)\\n- Styled-Components\ub294 \uc2a4\ud0c0\uc77c\uc774 Render \ub420 \ub54c \ub9c8\ub2e4 head \ud0dc\uadf8\uc758 style \ud0dc\uadf8\ub97c \ubcc0\uacbd\ud55c\ub2e4. \uc989, \uc0c8\ub85c\uc6b4 \uc2a4\ud0c0\uc77c\uc774 \ub4f1\uc7a5\ud560 \ub54c\ub9c8\ub2e4 `\ud3f0\ud2b8\ub97c \uc7ac\uc694\uccad`\ud558\ub294 \ud604\uc0c1\uc774 \ub098\ud0c0\ub09c \uac83!\\n\\n\uc774\uc288\ub97c \ud655\uc778\ud574\ubcf4\uc558\uc73c\ub2c8, \ub0b4 \uc0ac\uc774\ud2b8\uc5d0\uc11c\ub3c4 \uadf8\ub7ec\ud55c \ud604\uc0c1\uc774 \uc77c\uc5b4\ub098\uace0 \uc788\ub294 \uac83\uc778\uc9c0 \ud655\uc778\ud574\ubcf4\uc558\ub2e4.\\n\\n\uc544\ub798\ub294 \ub2e4\ud06c\ubaa8\ub4dc\ub97c \ud1a0\uae00\ud560 \ub54c\ub9c8\ub2e4 style\uc5d0 \ubcc0\ud654\uac00 \uc77c\uc5b4\ub098\ub294 \uac83\uc744 \ud655\uc778\ud55c \ud0dc\uadf8\uc774\ub2e4.  \\n![styled-component-head-style](./scstyle1.png)\\nhead \uc544\ub798 style\uc774 \ub2f4\uaca8\uc788\ub2e4.\\n\\n![network/font](./scstyle2.png)\\nnetwork/font \ud0ed\uc5d0\ub3c4 \ub2e4\ud06c\ubaa8\ub4dc\ub97c \ud1a0\uae00\ud560 \ub54c\ub9c8\ub2e4 \ud3f0\ud2b8\uac00 \uacc4\uc18d \ub2f4\uae30\ub294 \uac83\uc744 \ud655\uc778\ud560 \uc218 \uc788\uc5c8\ub2e4.\\n\\n### 4) \ud574\uacb0 \ubc29\ubc95\uc740?\\n\\n- [@font-face\ub97c globalStyle\uc5d0 \ub123\uc9c0 \ub9d0\uace0 \uc3d9 \ube7c\ub0b4\uc11c css\ub85c \ub2e4\ub8e8\uba74 \ub41c\ub2e4.](https://github.com/uhgenie7/portfolio2022/commit/b1a13fcb7b1ef8b0d7ac226be8d5322af274c003)\\n\\n```css title=\\"src/styles/font.css\\"\\n@font-face {\\n  font-family: \'Pretendard-Regular\';\\n  font-display: swap;\\n  src: url(\'/fonts/PretendardVariable.ttf\') format(\'woff\');\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n```\\n\\n```tsx title=\\"pages/_app.tsx\\"\\nimport GlobalStyle from \'@src/styles/globalStyle\';\\nimport Head from \'next/head\';\\nimport Favicon from \'@src/components/Favicon\';\\nimport \'../src/styles/font.css\';\\n\\nfunction MyApp({ Component, pageProps }: AppProps) {\\n  const [mounted, setMounted] = useState(false);\\n\\n  //   ...\\n}\\n```\\n\\n### 5) NextJS\\n\\n- \ud574\ub2f9 \uc774\uc288\uac00 \ubc1c\uc0dd\ud55c \ud504\ub85c\uc81d\ud2b8\ub294 NextJS\ub85c \ub9cc\ub4e4\uc5b4\uc84c\ub2e4.\\n- NextJS\ub294 \ud504\ub808\uc784\uc6cc\ud06c\uc774\uae30 \ub54c\ubb38\uc5d0, \uae00\ub85c\ubc8c css\uc5d0 \ub300\ud55c \uaddc\uce59\ub3c4 \uc815\ud574\uc838 \uc788\ub2e4.\\n- \ub9c8\uc74c\ub300\ub85c css\ub97c import \ud560 \uacbd\uc6b0 [Global CSS Must Be in Your Custom App \uc5d0\ub7ec\ub97c \uc9c1\uba74\ud558\uac8c \ub420 \uac83](https://nextjs.org/docs/messages/css-global)\uc774\ub2e4...\\n\\n## 3. \uc804\uccb4 \ucf54\ub4dc\\n\\n```tsx title=\\"pages/_app.tsx\\"\\nimport \'../src/styles/font.css\';\\n\\nfunction MyApp({ Component, pageProps }: AppProps) {\\n  return (\\n    <>\\n      <GlobalStyle />\\n      <Component {...pageProps} />\\n    </>\\n  );\\n}\\n\\nexport default MyApp;\\n```\\n\\n```css title=\\"src/styles/font.css\\"\\n@font-face {\\n  font-family: \'Pretendard-Regular\';\\n  font-display: swap;\\n  src: url(\'/fonts/PretendardVariable.ttf\') format(\'woff\');\\n  font-weight: 400;\\n  font-style: normal;\\n}\\n```\\n\\n```ts title=\\"src/styles/globalStyle.ts\\"\\nimport { createGlobalStyle } from \'styled-components\';\\n\\nconst GlobalStyle = createGlobalStyle`\\n  html,\\n  body {\\n    font-family: Pretendard-Regular, -apple-system, sans-serif;\\n  }\\n `;\\n```"},{"id":"/img-onerror","metadata":{"permalink":"/fixed/img-onerror","source":"@site/fixed/img-onerror/index.md","title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","description":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4","date":"2021-03-05T00:00:00.000Z","formattedDate":"2021\ub144 3\uc6d4 5\uc77c","tags":[{"label":"html","permalink":"/fixed/tags/html"},{"label":"img","permalink":"/fixed/tags/img"}],"readingTime":1.365,"hasTruncateMarker":true,"authors":[],"frontMatter":{"title":"img \ud0dc\uadf8\uc5d0 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6b0\uae30","description":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4","tags":["html","img"],"date":"2021-03-05"},"prevItem":{"title":"\ub2e4\ud06c\ubaa8\ub4dc \ud1a0\uae00 \uc2dc, \ud3f0\ud2b8\uac00 \uae5c\ube61\uc774\ub294 \ud604\uc0c1 (Feat. Styled-Component)","permalink":"/fixed/fout"}},"content":"img \ud0dc\uadf8 404 Error\ub97c \ub300\ube44\ud574 \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub744\uc6cc\ubd05\uc2dc\ub2e4\\n\\n\x3c!--truncate--\x3e\\n\\n## \uc0c1\ud669\\n\\nAPI\ub85c \uc774\ubbf8\uc9c0\ub97c \ubd88\ub7ec\uc624\ub294 \ub3c4\uc911, \uc774\ubbf8\uc9c0\uac00 \uae68\uc838 \uc5d0\ub7ec\uac00 \ub744\uc6cc\uc9c0\ub294 \ubb38\uc81c \ubc1c\uc0dd.\\n\\n![comedy \uc2ac\ub77c\uc774\ub4dc\uac00 \uae68\uc9c4 \ubaa8\uc2b5](./error1.png)\\n![404\uc5d0\ub7ec](./error2.png)\\n\\n## \ud574\uacb0 \ubc29\ubc95\\n\\n- onerror \uc18d\uc131\uc744 \uc774\uc6a9\ud55c\ub2e4.\\n\\n1. \ub300\uccb4 \uc774\ubbf8\uc9c0 \ub178\ucd9c\\n\\n```html title=\\"index.html\\" {4}\\n<img\\n  src=\\"\uc6d0\ubcf8 \uc774\ubbf8\uc9c0 \uacbd\ub85c\\"\\n  alt=\\"\uc774\ubbf8\uc9c0\uc758 \ud14d\uc2a4\ud2b8 \uc124\uba85\\"\\n  onError=\\"this.src=\'/movie_api/img/replace.jpg\';\\"\\n/>\\n```\\n\\n2. \uc774\ubbf8\uc9c0 \uc228\uae30\uae30\\n\\n```html title=\\"index.html\\" {4}\\n<img\\n  src=\\"\uc6d0\ubcf8 \uc774\ubbf8\uc9c0 \uacbd\ub85c\\"\\n  alt=\\"\uc774\ubbf8\uc9c0\uc758 \ud14d\uc2a4\ud2b8 \uc124\uba85\\"\\n  onError=\\"this.style.display=\'none\';\\"\\n/>\\n```\\n\\n## \ud574\uacb0\\n\\n![solved1](./fixed1.png)\\n\\n![solved2](./fixed2.png)\\n\\n## \uc774\ubbf8\uc9c0\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\ub294 \uba87 \uac00\uc9c0 \uc0c1\ud669\\n\\n- src \uc18d\uc131\uc774 \ube44\uc5c8\uac70\ub098 null\uc784.\\n- src\uc758 URL\uc774 \ud604\uc7ac \uc0ac\uc6a9\uc790\uac00 \ubcf4\ub294 \ud398\uc774\uc9c0\uc758 URL\uacfc \uac19\uc74c.\\n- \uc9c0\uc815\ud55c \uc774\ubbf8\uc9c0\uac00 \uc190\uc0c1\ub3fc \ubd88\ub7ec\uc62c \uc218 \uc5c6\uc74c.\\n- \uc774\ubbf8\uc9c0\uc758 \uba54\ud0c0\ub370\uc774\ud130\uac00 \uc190\uc0c1\ub3fc \uc6d0\ubcf8 \ud06c\uae30\ub97c \uc54c\uc544\ub0bc \uc218 \uc5c6\uace0, `img` \uc694\uc18c\uc758 \uc18d\uc131\uc5d0\ub3c4 \ud06c\uae30\ub97c \uc9c0\uc815\ud558\uc9c0 \uc54a\uc74c.\\n- \uc0ac\uc6a9\uc790 \uc5d0\uc774\uc804\ud2b8\uac00 \uc9c0\uc6d0\ud558\uc9c0 \uc54a\ub294 \uc774\ubbf8\uc9c0 \ud615\uc2dd\uc784."}]}')}}]);