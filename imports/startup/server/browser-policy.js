import { BrowserPolicy } from 'meteor/browser-policy-common';
/* insert browser policy rules here
 e.g., BrowserPolicy.content.allowOriginForAll( 's3.amazonaws.com' );
  */
BrowserPolicy.content.allowFontOrigin("data:");
