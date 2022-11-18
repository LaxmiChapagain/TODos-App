This project is hosted at :https://laxmichapagain.github.io/TO-DO-List/

#  TO-DO List

Your project should fulfill following criteria:
1. A text input field that takes 1 todo item (task).
2. A button to submit the entered todo item. (It adds the latest todo item in the todo list)
3. Below these, display the list of all the todo items
4. Add an event: if user clicks on any todo item from the list, it should be marked done by
any change in the item text (the change can be of your choice, example: by turning the
color of text to gray or by striking thought the text)
5. At the bottom, display an information that tells the count of todo items are NOT marked
done in the format:
“X out of Y tasks remaining” where X is the items that are NOT done yet and Y is the
total number of items in the list.



<style>
.dimmed { color: gray }
.container {
  display:grid;
  grid-template-columns: 50% 50%;
  text-align: center;
  align-content: center;
  align-items: end;
}
.flex-gap-1{
  display:flex;
  grid-gap:1rem;
}
badge{
  background-color: #6b56bc8c;
  color: white;
  padding: 1px 4px;
  text-align: center;
  border-radius: 5px;
  margin: 0 4px;
}
</style>

# Explorug Flags

<div>
Flags can be either boolean (true/false) or numbered(0,1,2) or string or array of strings/objects. <br/>
Some flags can be set 0,1,2. <br/>

`const mode = {` <br/>
`None: 0,`<br/>
`Both: 1, //Both admin and the multiple account`<br/>
`OnlyAdmin: 2`<br/>
`};`<br/>

If any flag is 0, let's say `xyz:0`, it means that the flag `xyz` is false for both multiple and admin mode. <br/>
If `xyz:1`, it means the flag should be true for both multiple and admin mode.<br/>
If `xyz:2`, it means the flag should be true for admin mode only.<br/>
<br/>
Information: <br/>

- Flags with titles gray in color are not commonly used.
</div>

### Default Flags

<details><summary>**zoomElement: 0 **</summary>
  <div> Flag for zoom element which is a slider by default. <br/> Buttons can be kept on right sidebar instead of slider by keeping `zoomElement:1` </div>
  <br/>

  - Can be 0 or 1; 0 for slider and 1 for buttons at right sidebar <br/>
  <img src="https://demo.explorug.net/documentationImages/zoomElement-0.png" width="800px">
  <br/>
  For zoomElement:0, Slider
  <br/> <br/> <br/>
  <img src="https://demo.explorug.net/documentationImages/zoomElement-1.png" width="800px">
  <br/>
  For zoomElement:1
  <br/>
  <br/>
  </details>

<details><summary> **thumbnailTemplate: 0 **</summary>
  <div>
  Refers to the template of the thumbnails to be shown. <br/>
    `thumbnailTemplate` can be 0 | 1 | 2 | 3 | 4 <br/>
    which means 4 different ways to render thumbnail

  - thumbnailTemplate: 0 ; DesignOnly - Default way, shows thumbnail with name :joy:
  - thumbnailTemplate: 1 ; DesignVars - Shows thumbnail with design varaitions
  - thumbnailTemplate: 2 ; VarsBottomBar - Shows main design, variations and then bottom bar with design name
  - thumbnailTemplate: 3 ; BottomBarVars - shows main design, bottom bar with deisgn name and then variations
  - thumbnailTemplate: 4 ; MainDesignWithSize - shows main design with size
  </div>
  <div class="container">
    <div>
      <img src="https://demo.explorug.net/documentationImages/thumbnailTemplate/thumbnailTemplate-0.png" width="400px">
      For ThumbnailTemplate:0
      <br/>
    </div>
    <div>
      <img src="https://demo.explorug.net/documentationImages/thumbnailTemplate/thumbnailTemplate-1.png" width="400px">
      <br/>
      For ThumbnailTemplate:1
      <br/>
    </div>
    <div>
      <img src="https://demo.explorug.net/documentationImages/thumbnailTemplate/thumbnailTemplate-2.png" width="400px">
      <br/>
        For ThumbnailTemplate:2
      <br/>
    </div>
    <div>
      <img src="https://demo.explorug.net/documentationImages/thumbnailTemplate/thumbnailTemplate-3.png" width="400px">
      <br/>
      For ThumbnailTemplate:3
      <br/>
    </div>
    <div>
      <img src="https://demo.explorug.net/documentationImages/thumbnailTemplate/thumbnailTemplate-4.png" width="400px">
      <br/>
      For ThumbnailTemplate:4
      <br/>
    </div>
  </div>
  </details>

<details>
  <summary> **colorSeparatedTexture: true **</summary>

  - to show individual texture for individual colors <br/>
  - Is true, by default
  </details>

<details>
  <summary> **showColorPercentage: true **</summary>

  ![showColorPercentage-1](https://demo.explorug.net/documentationImages/showColorPercentage.JPG "showColorPercentage=true")

  - to show color persentage in color boxes/swatch <br/>
  - Is true, by default

  </details>

<details>
  <summary> **hasOrderSheet: true **</summary>

  - to show ordesheet. If it's false, Ordersheet and ordersheet button won't be shown <br/>
  - Is true, by default
  </details>

<details>
  <summary> **defaultQualityIndex: 0 **</summary>

  - Index of the quality to be selected by default from quality list. <br/>
  - `defaultQualityIndex: 0` means first quality is selected by default from the list.
  </details>

<details>
  <summary> **defaultStandardSize: 0 **</summary>

  - Index of the standard size to be selected by default from the size list. <br/>
  - `defaultQualityIndex: 0` means first standard size option is selected by default.
  - Standard Size options are _not_ available by default and are taken from interfaceElements
  </details>

<details>
  <summary> **defaultUnit: null **</summary>

- Default Unit can be 'cm' or 'ft' or null. <br/>
- `defaultUnit: null` means default unit is taken from the design file (ctf or jpg or png).
  </details>

<details>
  <summary> **hasRugshare: false **</summary>

   <img src="https://demo.explorug.net/documentationImages/hasRugShare-true.PNG" width="300px">
<br/>
For hasRugShare:1

  <img src="https://demo.explorug.net/documentationImages/hasRugshare.JPG" alt="hasRugshare=true" width="600"/>

- Flag to enable/disable Rugshare. It has to be allowed on backend also. <br/>
  </details>

<details>
  <summary> **hasFavorites: true **</summary>

- Flag to enable/disable "Add to favourites" feature<br/>
  It also hides/shows favorites tab.
  </details>

<details>
  <summary> **showCopyright: true **</summary>

- Flag to hide/show Copyright text.
- `Explorug.com ©2010-2022 Alternative Technology` line should always be shown.
  </details>

<details>
  <summary> **showAddToCart: false **</summary>

- Flag to hide/show `Add to cart` button. It appears in footer section of right sidebar. <br/>
  When clicked upon, it send explorug data to parent window.
  </details>

<details>
  <summary> **showBuyNow: false **</summary>

- Flag to hide/show `Buy Now` button. It handles payment via paypal for Ramro designs.
- Buynow buttons is located next to order sheet butn<br/>
  </details>

<details>
  <summary> **showEcatModeOnly: false **</summary>

- Turn this flag on when explorug should be opened in ecatalog mode only. i.e. design to open should be passed in url as `initdesign` parameter with `&mode=ecat` in url. <br/>
  Viewing of other designs is prevented in this mode.
  </details>

<details>
  <summary> **showHistoryBack: false **</summary>

- To show a `Back` button in the footer area of right sidebar. It allows to go into previous page (as history back) <br/>
  </details>

<details>
  <summary> **showSaveImage: true **</summary>

- It shows/hides the `download` button.
- To allow download of design and rooms as image file <br/>
  </details>

<details>
  <summary> **separateDownloadIconPath: '' **</summary>

- It's used to show different icon in place of download button. Path of the icon file should be passed through this flag. <i> Done for Jaipur rugs</i> <br/>
  </details>

<details>
  <summary> **applyColorPaletteinSameFolder: false **</summary>

- Apply same color palette (
  
   and material) in other designs of the same folder. <i>(example in dalyn rugs)</i> <br/>
  </details>

<details>
  <summary> **applyColorPaletteinVariations: false **</summary>

- Apply same color palette (color and material) in design variations. <i>(example in dalyn rugs)</i> <br/>
  </details>

<details>
  <summary> **hasMasterCarving: mode.Both **</summary>

- To hide/show `Carving` button next to `autocolor` button in color area. <br/>
  <br/>

    <img src="https://demo.explorug.net/documentationImages/hasMasterCarving-true.PNG"  width="300px">
  <br/>
  For hasMasterCarving:true
    </details>

<details>
  <summary> **showMasterCarvingAsCheckbox: false **</summary>

- To hide/show `Carving` feature as a checkbox (not a button) <br/>
  <i>Done in stark allegro: https://v3.explorug.com/?page=starkallegro </i>
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showMasterCarvingAsCheckbox-true.PNG"  width="300px">
  <br/>
  For showmasterCarvingAsCheckbox:true

  </details>

<details>
  <summary> **designThumbsAsBg: mode.None **</summary>

![designThumbsAsBg](https://demo.explorug.net/documentationImages/designThumbsAsBg.JPG "designThumbsAsBg: 1")

- To place thumbnails in same size irrespective of their shape/size. <i> Done in Talisman Mills</i>

  <br/>
  </details>
<details >
  <summary> **fullPageThumb: mode.None **</summary>

- To show/hide thumbnails of all designs in full page.<br/>
  <i> No design is selected by default. It shows the thumbnails only </i>

<br/>
    <img src="https://demo.explorug.net/documentationImages/fullPageThumb-0.png" style="width:500px" >
<br/>
For fullPageThumb:0
<br/>

   <img src="https://demo.explorug.net/documentationImages/fullPageThumb-1.png " style="width:500px">
<br/>
<br/>
For fullPageThumb:1
  </details>


<details>
  <summary> **defaultSelectedTab: 0 **</summary>

- `defaultSelectedTab: 0` selects `designs` tab by default in design view. <br/>
  Example: when a design thumb is clicked in fullpagethumb mode, `Designs` tab is selected by default.<br/>
  If `visualization` tab has to be selected then it should be `defaultSelectedTab: 1`
  </details>

<details>
  <summary> **defaultSelectedTabInRoomView: 1 **</summary>

- `defaultSelectedTabInRoomView: 1` selects `visualization` tab by default in room view. <br/>
  </details>

<details>
  <summary> **showFullPageThumbOnBack: false **</summary>

- `showFullPageThumbOnBack: true` shows designs in FullPagethumb mode when user tries to go back. <br/>
  </details>

<details>
  <summary> **homeTemplate: pageViews.HOME **</summary>

- `homeTemplate: "HOMEPAGE"` shows explorug in HOME page template (by default). <br/>
  Page views can be `"HOMEPAGE"` , `"STEPPER"` , `"FULL_PAGE_THUMB"`, `"INTERMEDIATE"`, `"CONTROLLER"`, `"COLORS"`, `"CREATEYOURRUG"`. <br/>
  > "HOMEPAGE": Default view (like basic explorug v3 setup), <br/>
  > STEPPER: "STEPPER", <br/>
  > FULL_PAGE_THUMB: "FULL_PAGE_THUMB", <br/>
  > INTERMEDIATE: "INTERMEDIATE", <br/>
  > CONTROLLER: "CONTROLLER", <br/>
  > COLORS: "COLORS", <br/>
  > CREATEYOURRUG: "CREATEYOURRUG" <br/>
  </details>

<details>
  <summary> **allowCreateYourRugTemplate: false **</summary>

- To allow creat-your-rug template from flag.  It is an advanced feature given  to specific user<br/>

<img src="https://demo.explorug.net/documentationImages/allowCreateYourRug-true.png " style="width:500px">
<br/>
For allowCreateYourRug:true && homeTemplate: pageViews.CREATEYOURRUG
<br/>

  </details>

<details>
  <summary> **showAllDesignsButton: mode.None **</summary>

- `showAllDesignsButton: 0` hides `All design` button in both multiple and admin mode. <br/>
- `showAllDesignsButton: 1` shows `All design` button in both multiple and admin mode. <br/>
- `showAllDesignsButton: 2` shows `All design` button in admin mode only. <br/>

<img src="https://demo.explorug.net/documentationImages/showAllDesignsButton-0.png" width="800px">
  
<br/>
For showAllDesignsButton:0

 <img src="https://demo.explorug.net/documentationImages/showAllDesignsButton-1.PNG" width="400px">
<br/>
For showAllDesignsButton:1
  </details>

<details>
  <summary> **showWarningInfoInFooter: false **</summary>

- To show warning text in footer when colors from different palette are selected <i>(eg: flipo)</i>
  <br/>
  Example: <br/>
  <img src="https://demo.explorug.net/documentationImages/showWarningInfoInFooter.png" alt="drawing" width="400"/>
    </details>

<details>
  <summary> **infoInFooter: '' **</summary>

- To show info text in right sidebar<i>(eg: shinebysho )</i>
  <br/>
  Example: <br/>
  for

`infoInFooter: "SHINE BY S.H.O FLAGSHIP SHOWROOM<br>23811 ALISO CREEK ROAD<br>LAGUNA NIGUEL, CA.<br>92677 USA<br><br>TOLL FREE: (888) 574-4634<br>(949) 643-1000 VOICE<br>(949) 643-1002 FAX<br><br><a href='mailto:info@shinebysho.com'> INFO@SHINEBYSHO.COM</a>"`

  ```css
    .at-sidebar__footer-infotextHTML {
      display: block;
    }
  ```

<img src="https://demo.explorug.net/documentationImages/infoInFooter.png" alt="drawing" width="400"/>
  </details>

<details>
<summary> <div class="dimmed"> customBorderUrl:''</div> </summary>
  <div class="dimmed"> Flag to pass customBorder url. Rare case! For now, not required.</div>
</details>

<details>
<summary> <div class="dimmed">hasExternalCssUrl: false</div></summary>
<div class="dimmed">When true, it loads companyurl/explorug.css ; when some string then it loads css from that string url</div>
</details>

<details>
<summary> <div class="dimmed">allowInnerBorder: false </div></summary>
<div class="dimmed">Should be set for bordertool only. This is depricated.</div>
</details>

<details>
<summary> **thumbFromCDN: true **</summary>
  Loads thumbnails from CDN by default
</details>

<details>
<summary> **showThumbTexture: false **</summary>
When true, it shows textures in thumbnails.
<br/>
  <img src="https://demo.explorug.net/documentationImages/showThumbTexture-true.PNG"width="400"/>
  <br/>
  For showThumbTexture:true
</details>

<details><summary> **hasCinematic: false **</summary>
  To show/hide Cinematic feature
  <div class="flex-gap-1">
    <div>
        <img src="https://demo.explorug.net/documentationImages/hasCinematic-false.PNG" >
      For hasCinematic:false
    </div>
    <div>
      <img src="https://demo.explorug.net/documentationImages/hasCinematic-true.PNG" >
        For hasCinematic:true
      </div>
  </div>
  
</details>

<details>
<summary> <div class="dimmed">showCinematicRoomRenderings: false</div></summary>
<div class="dimmed">Depricated</div>
</details>

<details>
<summary><div class="dimmed">applyNormalMapInJPEG: false </div></summary>
</details>

<details>
<summary> **linksToOtherAccounts: [] **</summary>
To show links to other accounts of same client.
<br/>
Format : <br/>
linksToOtherAccounts: [
  {
    link: 'link1.html',
    text: 'Go to Link 1'
  },
  {
    link: 'link2.html',
    text: 'Go to Link 2'
  }
]
<br/>
<br/>
  <img src="https://demo.explorug.net/documentationImages/linksToOtherAccounts-value.png"width="500"/>
</details>

<details>
<summary> <div class="dimmed">hasDisabledPrintScreen: true </div></summary>
<div class="dimmed">To disable PrintScreen. Depricated!</div>
</details>

<details>
<summary> **isFelt: false **</summary>
Set true for felt designs
<br/>
  <img src="https://demo.explorug.net/documentationImages/isFelt-true.png"width="400"/>
  <br/>
For isFelt:true
</details>

<details>
<summary> **postToParentWhenLoaded: false **</summary>
When true, it sends a message to parent window when the explorug completes loading. Applicable in explorug iframe.
</details>

<details>
<summary>**postToParentOnEveryColorChange: false **</summary>
When true, it sends a message to parent window whenever any color is changes in explorug. Applicable in explorug iframe.
</details>

<details>
<summary><div class="dimmed">showCinematicRoomRenderings: false</div></summary>
<div class="dimmed">Depricated!</div>
</details>

<details>
<summary>**customDialogBoxContent: "" **</summary>
Done in jules flipo (show tutorial dialog box at beginning)
<br/>
<br/>
For this feature, flag showCustomDialogAtStart: true should be set, else it will not work.
<br/>
<br/>
  <img src="https://demo.explorug.net/documentationImages/customDialogBoxContent-imgsrc.png"width="400"/>
<br/>
For customDialogBoxContent: " Image tag with image source "
</details>

<details><summary>**showCustomDialogAtStart: false **</summary>
Show dialog box at beginning. 
Documented in flag <b>customDialogBoxContent</b>
</details>

<details><summary>**showWordCloud: false **</summary>
Show Word cloud (done in Beyond dreams 2)
<br/>
  <img src="https://demo.explorug.net/documentationImages/showWordCloud-true.png"width="400"/>
  <br/>
  For showWordCloud:true
</details>

<details><summary>**pageViewsOptions **</summary>

  - <details><summary>**colors**</summary>
      ```json
        {
           "pageViewsOptions": {
              "colors": {
                "showOrdersheetBtnBelowColorsArea": true
              }
            }
        }
      ```
     `showOrdersheetBtnBelowColorsArea: true` <br/>
        Shows Ordersheet button below color area
    
    </details>

  - <details><summary>**app**</summary>

    ```json
        {
           "pageViewsOptions": {
              "app": {
                "template": null
              }
            }
        }
      ```
    `template: null` : Template for app; can be `CREATEYOURRUG` or `HOME`
  </details>
</details>

## Create your rug

<details><summary>**createYourRug **</summary>
  Inorder to go to createYourRug page, first of all homeTemplate flags default pageViews.HOME should be set to >> homeTemplate: pageViews.CREATEYOURRUG and the following url should be given to browser.<br/>
   URL: <a href="http://localhost:23456/explorug.html?pageview=createyourrug"> Click Here</a>

  - <details><summary>**showOrdersheetBtnBelowColorsArea: true **</summary>
    Shows Ordersheet button below color area
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showOrdersheetBtnBelowColorsArea-true.PNG"width="300"/>
    <br/>For showOrdersheetBtnBelowColorsArea:true
    </details>

  - <details><summary>**defaultZoom: 3 **</summary>To set default zoom of detail view in Create your rug mode
      <div class="flex-gap-1" style="align-items: end">
        <div>
          <img src="https://demo.explorug.net/documentationImages/defaultZoom-1.png" width="400" >
          For defaultZoom:1
        </div>
        <div>
          <img src="https://demo.explorug.net/documentationImages/defaultZoom-2.png"width="400" >
          For defaultZoom:2
        </div>
      </div>
    </details>
    
  - <details><summary>**scrollToDesignViewAfterVariationOnClick: true **</summary>
      When true, explorug automatically scrolls to design view when any variation is clicked.
    </details>

  - <details><summary>**showInteractiveCatalog**</summary>

    - <details><summary>**hasInteractiveCatalog: false **</summary>
        To show Interactive catalog, set it true
        <br/><img src="https://demo.explorug.net/documentationImages/hasInteractiveCatalog-true.png" width="400" >
        <br/>
          For hasInteractiveCatalog:true
      </details>

    - <details><summary>**interactiveCatalogUrl: "https://catalogs.explorug.com/explorug/"**</summary>
          Set url of the Interactive Catalog to be shown in CYR mode
      </details>
      
    - <details><summary>**interactiveCatalogThumbUrl: ""**</summary>
          Set url of the Interactive Catalog to be shown in CYR mode
      </details>
  - <details><summary>** detailViewsOptions: ["DESIGN_VIEW_ZERO_ZOOM",  "DESIGN_VIEW_DEEPZOOM", "DESIGN_VIEW_PERSPECTIVE" ], **</summary>
    Shows design views section with Full rug view, close up view and Interactive view as shown in "https://ruglife.createyourrug.com/" as per detailviewname given in array.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/detailviewsoptions.PNG"width="300"/>
    <br/> For detailViewsOptions: ["DESIGN_VIEW_ZERO_ZOOM",  "DESIGN_VIEW_DEEPZOOM", "DESIGN_VIEW_PERSPECTIVE" ]
    <br/>
    <img src="https://demo.explorug.net/documentationImages/FullrugandCloseup.PNG"width="300"/>
    <br/> For detailViewsOptions: ["DESIGN_VIEW_ZERO_ZOOM",  "DESIGN_VIEW_DEEPZOOM"]
    </details>    
  - <details><summary>**showLanguageOptionsInCYR: true **</summary>
    Shows language option below design variations button on right side. If this flag is set false, language option is not shown.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/isPaulig.PNG"width="300"/>
    <br/>For showLanguageOptionsInCYR: true
    </details> 
</details>

## Interface

<details><summary>**interface **</summary>

  - <details><summary>**iconsReplace: null**</summary>
      Format: [{ orig:'expand', new:'options'}] <i>(done for woven)</i>
      <br/>
      <br/>
      <img src="https://demo.explorug.net/documentationImages/iconReplacedWovenEdge.PNG"  width="400">

      For wovenEdge

      <img src="https://demo.explorug.net/documentationImages/iconReplace-null.PNG"  width="400">

      For iconReplace:null
    </details>

  - <details><summary>**showSidebarsByDefault **</summary>
      Left and Right side bars are shown when left:true and right:true is done respectively.
      <br/>
      <img src="https://demo.explorug.net/documentationImages/showSideBarsByDefault-false.png"  width="400">
      <br/>
       For
      
      ```json
        {
          "interface": {
            "showSidebarsByDefault": {
              "left": true,
              "right": true
            }
          }
        }
      ```
    </details>

  - <details><summary>**showStory **</summary>
      Design and folder story are shown when design:true and folder:true is done respectively.
      <br/>
      <br/>
      <img src="https://demo.explorug.net/documentationImages/design-true.PNG"  width="400"> 

      For design:true
      <br/>
      <img src="https://demo.explorug.net/documentationImages/folder-true.PNG"  width="400">

      For folder:true
      <br/>
      <img src="https://demo.explorug.net/documentationImages/afterFolderIsTrue.PNG"  width="400">

      After Folder is True
   </details>

  - <details><summary>**showTextInRoomView: false **</summary>
      Text to show below room view rendering

      <img src="https://demo.explorug.net/documentationImages/showTextInRoomView-true.png"  width="400">
       For showTextInRoomView:true
    </details>
</details>

## Left Sidebar Tabs

This flag used only in default template eg:saccocarpet

<details><summary><div class="dimmed">leftSidebarTabs</div></summary>
  - <details><summary><div class="dimmed">collectionTab: false</div></summary>
    Show/Hide Collection Tag next to design tab
     </details>

  - <details><summary><div class="dimmed">artworkTab: false</div></summary>
    Show/Hide Artwork Tab 
    </details>

</details>

## Design Browser (Full page thumbnails page)

These flags should be used for page showing full page thumbnails


<details><summary>**designBrowser **</summary>
  - <details><summary>**showLeftSidebarByDefault: false **</summary>
      Show/Hide Left sidebar by default
      <br/>
      <div><div class="container"><img src="https://demo.explorug.net/documentationImages/showLeftSidebarByDefault.png" alt="showLeftSidebarByDefault-true" width="300" style="margin: auto;"/><img src="https://demo.explorug.net/documentationImages/showLeftSidebarByDefault-false.png" alt="showLeftSidebarByDefault-true" width="300" style="margin: auto;"/> <br/><span>showLeftSidebarByDefault = false</span><span>showLeftSidebarByDefault = true</span></div></details>

  * <details><summary>**showOpeningImage: false **</summary>
    Show/Hide Opening image
    <img src="https://demo.explorug.net/documentationImages/showOpeningImage.png" alt="showOpeningImage-true" width="400"/></details>

  * <details><summary>**showCurrentOpenFolder: false **</summary>
      Show/Hide currently selected folder</details>
    </details>

## Rugshare

<details><summary>**rugshare **</summary>

  - <details><summary>**socialMediaShareDescription: "" **</summary>
    Text to show as social media description</details>

  - <details><summary>**shareCustomizedDesign: true **</summary>
    To allow sharing customized designs via rugshare</details>

</details>

## Color Customization Tools

<details><summary>**colorCustomizationTools **</summary>

- <details><summary>**showColorCustomizationTools: false **</summary>
  To show Triple dots icon next to heading</details>
  <img src="https://demo.explorug.net/documentationImages/showColorCustomizationTools.png" alt="showColorCustomizationTools-true" width="400"/>

- <details><summary>**showMapColors: false **</summary>
  mapcolors is shown in admin by default. Showmapcolors == true for multiple accounts</details>
  <img src="https://demo.explorug.net/documentationImages/showMapColors.png" alt="showMapColors-true" width="400"/>

* <details><summary>**addShuffleColors: false **</summary>
  To show shuffle colors inside the menu list</details>
  <img src="https://demo.explorug.net/documentationImages/addShuffleColors.png" alt="showMapColors-true" width="400"/>

- <details><summary>**addColorPercentToggle: false **</summary>
  To show ColorPercentToggle inside the menu list</details>

* <details><summary>**addAutocolor: false **</summary>
  To show Autocolor inside the menu list</details>

* <details><summary>**addPaletteTools: false **</summary>
  To show Save palette and Apply palette buttons inside the menu list</details>
  <img src="https://demo.explorug.net/documentationImages/addPaletteTools.png" alt="addPaletteTools-true" width="400"/>

</details>

## Color Selection Box

<details><summary>**colorSelectionBox **</summary>
  <img src="https://demo.explorug.net/documentationImages/colorSelectionBox.png" alt="colorSelectionBox" width="200"/>

- <details><summary>**showColorName: false **</summary>
  <p>To show color name under each color boxes</p>
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showColorsName-true.png" alt="showSimilarColors-true" width="400"/>
  <br/>
  For showColorName: true
  </details>


- <details><summary>**showSimilarColors: true **</summary>
  To show list of similar colors</details>
  <img src="https://demo.explorug.net/documentationImages/showSimilarColors.png" alt="showSimilarColors-true" width="400"/>

- <details><summary>**showColorFilter: true **</summary>
  To show color filters</details>
  <img src="https://demo.explorug.net/documentationImages/showColorFilter.png" alt="showColorFilter-true" width="200"/>
- <details><summary>**showColorPaletteDropDown: true **</summary>
  To show section of  Color Palette DropDown</details>
  <img src="https://demo.explorug.net/documentationImages/showColorPaletteDropDown-true.PNG" alt="showColorPaletteDropDown-true" width="200"/>
  For showColorPaletteDropDown: true
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showColorPaletteDropDown-false.PNG" alt="showColorPaletteDropDown-true" width="200"/>
  <br/>
  For showColorPaletteDropDown: false
- <details><summary>**showCarving: true **</summary>
  To show individual carving. It can be 0, or 1 or 2<br/>
  0: disable individual carving in both admin and multiple mode. <br/>
  1: enalbe individual carving in both admin and multiple mode. <br/>
  2: enable individual carving in admin but disable in multiple mode. <br/></details>
  <img src="https://demo.explorug.net/documentationImages/showCarving.png" alt="showCarving-true" width="200"/>

- <details><summary>**customColorOptions: true **</summary>
  To show color wheel so that user can select any color <i>(done in talismanmills)</i>
  <br/>
    ```json
    "colorSelectionBox":{
      "customColorOptions": [{"text": "Custom Color"}]
    }
    ```

  </details>
  <img src="https://demo.explorug.net/documentationImages/customColorOptions.png" alt="customColorOptions" width="200"/>

- <details><summary>**collectionFilter: true **</summary>
   show color collection and width in ordersheet according to folder.<br/>

  ```json
    "colorSelectionBox":{
      "collectionFilter":[
          {
            "folder": "Suites - Ambiances",
            "collection": ["colour house", "Premounted 70 CM", "Premounted 90 CM"],
            "widthOptions": ["", 50, 60, 70, 80, 90, 100]
          },
          {
            "folder": "200cm",
            "collection": ["colour house", "Premounted 200 CM"],
            "widthOptions": ["", 200]
          }
        ]
    }
  ```

  <br/>
  Above code shows color lists `"colour house", "Premounted 70 CM", "Premounted 90 CM"` when folder Suites Ambiances  selected and shows width options `["", 50, 60, 70, 80, 90, 100]` in ordersheet width input. <br/>
  </details>

- <details><summary>**addPlaceholderinWidthOptions: false **</summary>
    To add placeholder</details>
    <img src="https://demo.explorug.net/documentationImages/addPlaceholderinWidthOptions.png" alt="addPlaceholderinWidthOptions-true" width="200"/>

- <details><summary>**defaultWidthOptionValue: 0 **</summary>
    To set a default width option selected
  </details>

- <details><summary>**placeholderTextinWidthOptions: 0 **</summary>
    Text for the placeholder in width options
    <br/>
    if 0, first widthoption will be chosen; <br/>
    if -1, placeholder will be shown
  </details>

* <details><summary>**swatchSize: 2**</summary>
    To set size of the swathces
  </details>

- <details><summary>**colorPaletteLabels**</summary>
  Done for Jules Flipo

  <img src="https://demo.explorug.net/documentationImages/colorPaletteLabels.png" width="200">
  <br/>

  ```json
  "colorPaletteLabels": {
  "colorLabelInfo": "",  //text to show at the bottom
  "labelTemplate": "",  // name of label template
  "labels": [], //texts of the colorlabels
  "colorLabelFilter": [] // to show colors according to selected folder
  },

  ```

    <br/>
    Example: (jules flipo)
    <br/>

  ```json
  "colorPaletteLabels": {
    "colorLabelInfo": {
      "en": "* Using colours of different suites will increase time and price.",
      "fr": "* L'utilisation de couleurs de différentes suites augmentera le délai et le prix."
    },
    "labelTemplate": "flipo",
    "labelTitle": {
      "en": "Premounted",
      "fr": "Prémonté"
    },
    "labels": [
      "Suite Vincennes",
      "Suite Opéra",
      "Suite Vendôme",
      "Suite Trocadero",
      "Suite Auteuil",
      "Suite Montmartre",
      "Suite Rive Gauche",
      "Suite Beaubourg",
      "Suite Saint-Sulpice",
      "Suite Notre-Dame"
    ],
    "colorLabelFilter": [
      {
        "colorListName": "Colour House",
        "labelIndeces": [],
        "showColorLabelInfo": false
      },
      {
        "colorListName": "Premounted 70 CM",
        "labelIndeces": [0, 1, 2, 3, 4, 5, 6, 7],
        "showColorLabelInfo": true
      },
      {
        "colorListName": "Premounted 90 CM",
        "labelIndeces": [1, 6],
        "showColorLabelInfo": true
      },
      {
        "colorListName": "Premounted 200 CM",
        "labelIndeces": [5, 8],
        "showColorLabelInfo": true
      },
      {
        "colorListName": "Premounted 400 CM",
        "labelIndeces": [9],
        "showColorLabelInfo": true
      }
    ]
  }
  ```

  </details>

- <details><summary>**customColorPreviews**</summary>
    <i>done in allegro wilton </i> <br/>
    In AllegroWilton , "Heathers", "Stria" comes from baseUrl whereas Allcolors and Solid comes from other location.<br/>
    <img src="https://demo.explorug.net/documentationImages/customColorPreviews-allegro.PNG" width="200">
    <br/>
    This one is screenshot from AllegroWilton.

  ```json
  "customColorPreviews": {
        "tabs": ["Heathers", "Stria"],
        "baseUrl": "https://v3.explorug.com/files/Customers/AllegroWilton/Colors"
      }
  ```

  </details>

- <details><summary>**dynamicCSBWidth: null**</summary>
    set selected color list index for which csb needs to be of dynamic width and then add css in class ".dynamicCSBWidth"+index
    Example: if you hjave to set dynamic width of First ColorList, index=0. <br/>
    set  dynamicCSBWidth: [0] and add css in class (eg: .dynamicCSBWidth0{width: 400px}) to set width of selection box
    <br/>
    Done in Jules FLipo

  ```json
  "colorSelectionBox": {
        "dynamicCSBWidth": [0, 4]
      }
  ```

  </details>

- <details><summary>**closeCSBAfterColorSelected: false**</summary>
    To close the color selection box after the color is chosen.
  <i> Done in Jules FLipo </i>

  ```json
  "colorSelectionBox": {
      "closeCSBAfterColorSelected": false
      }
  ```

  </details>

- <details><summary>**searchColorInAllLists: false**</summary>
    To search color in all color list

  ```json
  "colorSelectionBox": {
      "searchColorInAllLists": true
      }
  ```

  </details>

- <details><summary>**showColorPomsImages: false**</summary>
    To Show color poms in the color swatches of selection box 
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showColorPomsImages-false.PNG" width="200">
    <br/>
    For showColorPomsImages:false
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showColorPomsImages-true.PNG" width="200">
    <br/>
      For showColorPomsImages:true
    </details>

- <details><summary>**defaultColorDatabaseIndex: null**</summary>
    To Set default color database so that whenever a color box is clicked, the color selection dialog box shows the default color database.

    </details>

</details>

## Design List Tree

<details><summary>**designListTree **</summary>

- <details><summary>**expandSelectedFolderInit: true**</summary>
    The selected folder is expanded in the tree list by default.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/expandSelectedFolderInit-true.png" width="400"/>
    <br/>
    For expandSelectedFolderInit :true

    <img src="https://demo.explorug.net/documentationImages/expandSelectedFolderInit-false.png" width="400"/>
    <br/>
    For expandSelectedFolderInit :false
    
    </details>

- <details><summary>**hasFilterBySize: false**</summary>
    Shows/Hides Size Filter in jpeg account only. Example in saccostockrugs
    <br/>
    <img src="https://demo.explorug.net/documentationImages/hasFilterBySize-true.PNG" width="400"/>
    <br/>
    For hasFilterBySize:true
    </details>

- <details><summary>**searchInFolder: false**</summary>
    When true, explorug searches for designs / rooms according to the text inside folders too.
    </details>

- <details><summary>**customThumbPath: null**</summary>
    This flag is used for displaying thumbnails from external source. Eg:studiop
    `customThumbPath: path of the external source`
    </details>

- <details><summary>**separateThumbnailColumn: false**</summary>
    This flag is used for displaying thumbnails from external source. Eg:studiop
    `customThumbPath: path of the external source`
    <br/>
    <img src="https://demo.explorug.net/documentationImages/separateThumbnailColumn-true.png" alt='separateThumbnailColumn-true' width="200"/>
    <br/>
    For separateThumbnailColumn: true
    </details>

- <details><summary>**consolidateSearch: false**</summary>
    During search if there are two or more designs with same name in different folders, then all the designs will appear in the search results by default. In such cases, if you want to show only 1 design as search result, the this flag should be set true `consolidateSearch: true`.
    </details>
- <details><summary>**keepFoldersExpanded: false**</summary>
    Set `keepFoldersExpanded:true` to expand all folders by default and to not collapse other folders on expanding one.
    keepFolderExpanded :true , expands the default selected  design folder by default.
     keepFolderExpanded :false , design folders are collapsed  by default.
    </details>

</details>

## File Manager

<details><summary>**fileManager **</summary>

- <details><summary>**forceUnit: null**</summary>
    The set default unit for files that are uploaded using filemanager.
    Example: it is set "in" for chacko; uploads designs in inch/ft without converting to cm
    </details>

</details>

## Visualizations

<details><summary>**visualizations **</summary>

- <details><summary>**defaultView: "DESIGN_VIEW_DEEPZOOM"**</summary>
    Indicates the default view in which explorug is set. 
    `defaultView:` can be `"DESIGN_VIEW_DEEPZOOM"` or `"DESIGN_VIEW_DEEPZOOM_RX"` or `"ROOM_VIEW"`
    <br/>
     " DESIGN_VIEW_DEEPZOOM_RX" is for wall to wall. 
    </details>

- <details><summary>**designViews: ["DESIGN_VIEW_DEEPZOOM"]**</summary>
    Indicates the list of views that are allowed in the explorug.
    Available views are: 
    - `"DESIGN_VIEW_DEEPZOOM"`, 
    - `"DESIGN_VIEW_DEEPZOOM_RX"`, 
    - `"DESIGN_VIEW_PERSPECTIVE"`, 
    - `"DESIGN_VIEW_FOLDEDBACK"`
    <br/>
    
    example: for ruglife, with flags.json: 
    
    ```json
    {
    "visualizations": {
        "defaultView": "DESIGN_VIEW_DEEPZOOM",
        "designViews": ["DESIGN_VIEW_DEEPZOOM", "DESIGN_VIEW_PERSPECTIVE"]
      }
    }
    ```

  It shows following views: <br/>
  <img src="https://demo.explorug.net/documentationImages/designViews.png" alt='"designViews": ["DESIGN_VIEW_DEEPZOOM", "DESIGN_VIEW_PERSPECTIVE"]' width="400"/>

  </details>

* <details><summary>**myRoomEnabled: true**</summary>
    To enable/ disable myroom feature.<br/>
    <img src="https://demo.explorug.net/documentationImages/myRoomEnabled.png" alt='myRoomEnabled:true' width="200"/>
    </details>

* <details><summary>**showIcebreakerinMyroom: true**</summary>
    To Show icebreaker page when myroom is clicked<br/>
    <img src="https://demo.explorug.net/documentationImages/showIcebreakerinMyroom-true.png" alt='showIcebreakerinMyroom:true' width="200"/>
    </details>

* <details><summary>**myroomTutorialLink: https://alternativetechnology.zendesk.com/hc/en-us/articles/900000724783 **</summary>
    Set the link to myroom tutorial. 
    <img src="https://demo.explorug.net/documentationImages/myroomTutorialLink.png" alt='myroomTutorialLink' width="400"/>
    </details>

* <details><summary>**showBackToDesignViewInRoomView: false **</summary>
    When true, it keeps a button on top right of room view that leads to design view when clicked upon.
    <img src="https://demo.explorug.net/documentationImages/showBackToDesignViewInRoomView.png" alt='showBackToDesignViewInRoomView' width="400"/>
  </details>

* <details><summary>**showARcardInIcebreaker: true **</summary>
    To show/hide AR card in Myroom Icebreaker page.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showARcardInIcebreaker.png" alt='showARcardInIcebreaker' width="400"/>
  </details>

* <details><summary><mark>**wallToWallCenterRepeat **</mark></summary>
 Designs center part is repeated from wall to wall. If any irregularities is seen in design, then flag wallToWallCenterRepeat:true should be set .

  ```json
  {
    "wallToWallCenterRepeat": {
      "x": false,
      "y": false
    }
  }
  ```

  </details>

* <details><summary><mark>**textureWrapType: null **</mark></summary>
  If designs is blurred then flag  textureWrapType:clampToEdge is set to make that design less blur.
  </details>

* <details><summary>**allowDesignFromUrlInMyroom: false **</summary>
  When this flag is true, it will allow users to pass design in url to open in myroom view.
  Design should be passed through `customDesignUrl`.
  `customDesignBaseUrl` and `corsCustomDesignUrl` should also be set. <br/>
  Example: (traumteppich) <br/>
  Flag.json should have following code: <br/>

  ```json
  {
    "customDesignBaseUrl": "https://www.traumteppich.com/images/product_images/popup_images",
    "corsCustomDesignUrl": true
  }
  ```

  Then following url will load the design passed in `customDesignUrl` :

  ```url
  https://v3.explorug.com/explorug.html?page=traumteppich&customdesignurl=sab495anth_rnd_top.jpg&initview=myroom&size=80cm&customclass=showleftbar

  ```

  </details>

* <details><summary>**myroomIcebreakerBackground: "PERSPECTIVE" **</summary>
  It loads perspective view of selected design in background of icebreaker page. <br/>
  Set path of any image to set that image as the background.

  </details>

* <details><summary>**takeAPictureImgUrl:  **</summary>
  Set path of any image that can be kept in "Take a Picture" thumbnail.
  </details>

* <details><summary><mark>**usePlainFbx: false **</mark></summary>
  This is for wall to wall. To make any designs natural , lines are added and if those lines tends to make designs irregular then flag usePlainFbx: true is set, to make that design regular.
  </details>

* <details><summary>**renderDesignViews: true **</summary>
    To render design views (above room list in home template)
    <div class="flex-gap-1">  
    <div>
    <img src="https://demo.explorug.net/documentationImages/renderDesignViews-true.png" alt='renderDesignViews-true' width="300"/>
    <br/>
    renderDesignViews:true
      </div>
      <div>
      <img src="https://demo.explorug.net/documentationImages/renderDesignViews-false.png" alt='renderDesignViews-false' width="300"/>
      <br/>
      renderDesignViews:false
      </div>
    </div>
  </details>

* <details><summary>**keepDesignTopViewInRoomlist: false **</summary>
    To show thumbnail for design view next to illustrations (rooms) thumbnails.

    <img src="https://demo.explorug.net/documentationImages/keepDesignTopViewInRoomlist-true.png" alt='keepDesignTopViewInRoomlist-true' width="300"/>
    <br/>
    keepDesignTopViewInRoomlist:true
  </details>

- <details><summary>**renderDesignsInVisualizationTab: false **</summary>
    To render design list in the visualization tab. After turning this flag on, css should also be changed.

    <img src="https://demo.explorug.net/documentationImages/renderDesignsInVisualizationTab-true.png" alt='renderDesignsInVisualizationTab-true' width="300"/>

    <br/>
    renderDesignsInVisualizationTab:true

  </details>

* <details>
  <summary><div class="dimmed">isBorderRugs: false</div></summary>
    Flag used for border-tool. Turn this on if the designs of any account is used as border rugs.
    </details>

* <details><summary><mark>**applyLinearFilter: true **</mark></summary>
   To eradicate blur from design, flag applyLinerFilter is set true.

  </details>

* <details><summary><mark>**maxCanvasSize: null **</mark></summary>
 Set as array for capping design texture size [maxwidth, maxheight] e.g. [2000, 2000]. Design can not be exceeded than 2000, 2000.

  </details>

* <details><summary>**showRuler: true **</summary>
  Flag to show/hide ruler in design visualization.
  <div class="flex-gap-1">  
    <div>
    <img src="https://demo.explorug.net/documentationImages/showRuler.png" alt='showRuler-true' width="300"/>
    <br/>
    showRuler:true
    </div>
    <div>
    <img src="https://demo.explorug.net/documentationImages/showRuler-false.png" alt='showRuler-false' width="300"/>
    <br/>
    showRuler:false
    </div>
    </div>
  </details>

* <details><summary>**rulerDefaultUnit: null **</summary>
  Default unit for the ruler
  <img src="https://demo.explorug.net/documentationImages/showRuler.png" alt='showRuler-true' width="300"/>
  </details>

- <details><summary>**showScaleOption: false **</summary>
  To Show/hide scale optons in room view
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showScaleOptions-true.PNG" alt='showScaleOption-true' width="300"/>
  <br/>
  For showScaleOptions:true
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showScaleOptions-false.PNG" alt='showScaleOption-true' width="300"/>
  <br/>
  For showScaleOptions:false
  </details>

</details>

## Design View

<details><summary>**designView **</summary>
  Flags related to Design View

- <details><summary>**minZoom: 0.75 **</summary>
  To set minimum zoom (for accounts other than jpeg account)
  </details>

- <details><summary>**maxZoom: 3 **</summary>
    To set maximum zoom (for accounts other than jpeg account)
  </details>

- <details><summary>**defaultZoom: 2 **</summary>
    To set default zoom
  </details>

- <details><summary>**minZoomJpeg: 0 **</summary>
    To set minimum zoom for jpeg account
  </details>

- <details><summary>**maxZoomJpeg: 1 **</summary>
    To set maximum zoom for jpeg account
  </details>

- <details><summary><mark>**wallToWallLockAxis: null **</mark></summary>
Design can be moved either in x axis , y axis or x and y axis.
wallToWallLockAxis: null >> Design can be moved in both horizontal and vertical direction.
wallToWallLockAxis: x >> Design can be moved in both horizontal direction
wallToWallLockAxis: y >> Design can be moved in both vertical direction
  </details>
      
 - <details><summary>**hasDesignWaterMark: false **</summary>
    To show watermark in design or downloaded image.  For hasDesignWaterMark, watermarkOptions also needs to be considered.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/hasDesignWatermark-true.png" alt='showScaleOption-true' width="300"/>
    <img>
    <br/>
    
  </details>
      
- <details><summary>**watermarkOptions **</summary>
    To show watermark, `hasDesignWaterMark` flag must be true first. <br/>
    `watermarkOptions` has different properties: <br/>
      `position`: Position of the watermark image. Ranges from 0 to 1 in x and y axis. 
        `"position": [0, 0]` means TOP LEFT <br/>
        `"position": [0, 1]` means TOP RIGHT <br/>
        `"position": [1, 0]` means BOTTOM LEFT <br/>
        `"position": [1, 1]` means BOTTOM RIGHT <br/>
        <br/>
      `opcaity`: Opcaity of the watermark. Ranges from 0 to 1 <br/>
      `width`: Width of the watermark. Normally 75 or 100 ... <br/>

  ```json
    {
      "watermarkOptions":{
        "position": [1, 1],
        "opacity": 1,
        "width": 75
      }
    }`

  ```
  </details>

- <details><summary>**dpi: 1 **</summary>
  To set dpi of design. Can be 1 or 2. 
  </details>

- <details><summary><mark>**clampZoom: false **</mark></summary>
Default value of Zoom can be set to 2, 3 or 4 and setting clampzoom:true allows to zoom only at default set values not to any analog value like designs can not be zoomed to 2.5
  </details>

- <details><summary>**zoomForMobile: null **</summary>
   If zoomForMobile:0.75, then default zoom in mobile will be 0.75
   Designs of stage is set to the given value in zoomForMobile. If zoomForMobile:null is given then design of stage takes defaultZoom value of design view flags.
   Example: allegro
  </details>

- <details><summary>**panTo: CENTER **</summary>
    To set how the zoomed in design view will be shown. <br/>
    panTo can be any one of `["CENTER", "TOPLEFT", "TOPRIGHT", "BOTTOMLEFT", "BOTTOMRIGHT"]`
  </details>

</details>

## Perspective View

  <details><summary>**perspectiveView **</summary>

- <details><summary>**configUrl: null **</summary>
  To render design in perspective view, a config file is used. Default path of the config file is public/v3assets/...  This flag is used to load config file from a different path other than default path.
  </details>

- <details><summary>**renderDefaultFloor: true **</summary>
    Should be set true by default. Set it to false, if default floor should not be rendered and instead, the floor should be rendered from some other location. If renderDefaultFloor: true, then it renders FBX from default FBX. If renderDefaultFloor: false, then it renders FBX from given url in ConfigUrl flag.
    </details>
  </details>

## Catalog View

```json
{
  "catalogViews": null
}
```

## Design Details Section

<details><summary>**designDetailSection **</summary>
  <img src="https://demo.explorug.net/documentationImages/designDetailSection.png" alt='designDetailSection' width="300"/> <br/>
  Image of Design Detail Section
    
  - <details><summary>**showDesignPathInTitle: false **</summary>
    When true, this flag shows Design Path in the title instead of just design name
     <div class="flex-gap-1">  
      <div>
      <img src="https://demo.explorug.net/documentationImages/showDesignPathInTitle-false.png" alt='showDesignPathInTitle-false' width="300"/>
      <br/>
      showDesignPathInTitle:false
      </div>
      <div>
      <img src="https://demo.explorug.net/documentationImages/showDesignPathInTitle-true.png" alt='showDesignPathInTitle-true' width="300"/>
      <br/>
      showDesignPathInTitle:true
      </div>
      </div>
  </details>

- <details>
  <summary><div class="dimmed">showDesignExhibitionPrice: false</div><summary>
    Created for specific purpose. Should be set true only of designs are used in design exhibition and price for those designs need to taken from php backend (not explorug's backend).
    <br/>
    Can be marked `Deprecated`.
  </details>

- <details>
  <summary><div class="dimmed">exhibitorName: ""</div></summary>
    Created for specific purpose. Should be set to exhibitor name (string) that will be passed to backend to fetch price. Price for those designs need to taken from php backend (not explorug's backend).
    <br/>
    Can be marked `Deprecated`.
  </details>

- <details><summary>**showDesignDimensions: true **</summary>
    To hide or show design dimensions in the detail section.
    Set it false to hide design dimensions, <br/>
    true to show dimensions in default unit and <br/>
    2 to show dimensions in both units(ft,cm)

    <div class="flex-gap-1">  
      <div>
      <img src="https://demo.explorug.net/documentationImages/showDesignDimensions-true.png" alt='showDesignDimensions-true' width="200"/>
      <br/>
      showDesignDimensions:true
      </div>
      <div>
      <img src="https://demo.explorug.net/documentationImages/showDesignDimensions-false.png" alt='showDesignDimensions-false' width="200"/>
      <br/>
      showDesignDimensions:false
      </div>
      <div>
      <img src="https://demo.explorug.net/documentationImages/showDesignDimensions-2.png" alt='showDesignDimensions-2' width="200"/>
      <br/>
      showDesignDimensions:2
      </div>
    </div>
  </details>

- <details><summary>**showAddToFavoriteText: false **</summary>
  To add text in Add to Favorite icon/button. 
  <div class="flex-gap-1">  
    <div>
    <img src="https://demo.explorug.net/documentationImages/showAddToFavoriteText-true.png" alt='showAddToFavoriteText-true' width="300"/>
    <br/>
    showAddToFavoriteText:true
    </div>
    <div>
    <img src="https://demo.explorug.net/documentationImages/designDetailSection.png" alt='showAddToFavoriteText-false' width="300"/>
    <br/>
    showAddToFavoriteText:false
    </div>
    </div>
  </details>

- <details><summary>**blockDesignName: false **</summary>
  To show design name in capital letters. It can be done using CSS text-transform:uppercase property. This flag is not so much important.
  <br/>
    <img src="https://demo.explorug.net/documentationImages/blockDesignName-true.png" alt='blockDesignName-true' width="300"/>
    blockDesignName:true in stark allegro

  </details>


- <details><summary>**showOneDimensionIfSquare: false **</summary>
  When true, it shows dimensions of one side onyl if the design is square or round.
  <br/>
  <img src="https://demo.explorug.net/documentationImages/showOneDimensionIfSquare-true.png" alt='showOneDimensionIfSquare-true' width="300"/>  
  </details>

- <details><summary>**showAsSidebarActionBtns: false **</summary>
    Shows buttons in sidebar when true<br/>
    <img src="https://demo.explorug.net/documentationImages/showAsSidebarActionBtns-true.PNG" alt='showAsSidebarActionBtns-true' width="300"/>
    <br/>
    For showAsSidebarActionBtns: true
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showAsSidebarActionBtns-false.PNG" alt='showAsSidebarActionBtns-true' width="300"/>
    <br/>
    For showAsSidebarActionBtns: false
    <br/>
  </details>

- <details><summary>**designNameTildeWithNextLine: false **</summary>
    This flag shows design name with tilde (\`) in the next line. <br/>
    Example: if design name is "Cubinia\`Simple" then in Design detail section, the name will be shown as <br/>
    `Cubinia` <br/>
    `Simple`
  </details>

- <details><summary>**showDimensionInInches: false **</summary>
    Set it true to show dimensions in Inches (in). 
  </details>

</details>

## Design Variations

<details><summary>**designVariations **</summary>
  Flags for Design Variations
  <img src="https://demo.explorug.net/documentationImages/designVariations.png" alt='designVariations' width="300"/>

- <details>
  <summary><div class="dimmed">**appendDesignName: true **</div></summary>
  Appends design name to variation name if true, not used currently
  </details>

- <details><summary>**sayOriginal: true **</summary>
  Caption of original design variation is kept "Original".
  </details>

- <details><summary>**containsOriginalDesign: false **</summary>
  It should be true only if the design variations folder (dot .folder) has original design inside it and it displays the original design(design located inside dot folder).
  If dot folder does not have original design, then on setting containsOriginalDesign:true, no any changes is seen. 
  </details>

- <details><summary>**putOriginalFirst: true **</summary>
    It keeps original design at first
  </details>

- <details><summary>**preserveVariations: false **</summary>
    When a design variation is clicked, and folder is changed. then this flags opens same design variation of newly clicked folder. Example: studiop
     <img src="https://demo.explorug.net/documentationImages/preserveVariations.png" alt='preserveVariations:true' width="300"/>  
     <br/>
     Link: https://v3.explorug.com/explorug.html?page=studiop 
  </details>

- <details><summary>**expandVariations: false **</summary>
  Shows Variations in expanded form (shows more variations by default)
  </details>

- <details><summary>**expandColorVariations: false **</summary>
  Shows Colors variations in expanded form (shows more color variations by default)
  </details>

- <details><summary>**expandShapeVariations: false **</summary>
  Shows shape variations in expanded form (shows more shape variations by default)
  </details>

- <details><summary>**useOriginalName: false **</summary>
  Uses original name of variations, when true. Set if false in most cases.
  </details>

</details>

## Color Area Swatch

<details><summary>**colorAreaSwatch **</summary>
  <img src="https://demo.explorug.net/documentationImages/colorAreaSwatch.png" alt='colorAreaSwatch' width="300"/>

- <details><summary>**isCollapsible: false **</summary>
  To hide/show "Show more" "show Less" buttons
  <br/>
  <br/>
  <img src="https://demo.explorug.net/documentationImages/isCollapsible-true.png" alt='isCollapsible:true' width="300"/>

  </details>


- <details><summary>**hasMixply: 0 **</summary>
    To show Mixply (mix of 2 or more colors)
    Values can be 0 or 1 or 2;  <br/>
    0 or false to set this flag false;<br/>
    1 to set this flag true for both admin and multiple <br/>
    2 to set this flag true for admin <br/>
  </details>

- <details><summary>**showColorPercentage: true **</summary>
  To show Color percentage
  </details>

- <details><summary>**colorNumberMode: 0 **</summary>
  Color Number Modes can be 0 or 1 or 2 for None, Numeric and Alpha mode respectively. <br/>
  <img src="https://demo.explorug.net/documentationImages/colorNumberModeAndcolorNumberPosition1.PNG"  width="300"/>
  <br/>
  For colorNumberModeAndcolorNumberPosition:1

  `NONE: 0,`
  `NUMERIC: 1,`
  `ALPHA: 2`

  </details>


- <details><summary>**colorNumberPosition: 0 **</summary>
    colorNumberPosition can be 0 or 1; <br/>
      `BesideColorPie: 0,`
      `InSideColorPie: 1`
    <br/>
    `colorNumberPosition: 0` shows color number beside the color pie whereas <br/>
    `colorNumberPosition: 1` shows color number inside the color pie. <br/>

  </details>


- <details><summary>**showRedoButton: false **</summary>
  Shows redo button inbetween `undo` and `reset`.
  </details>

- <details><summary>**hasAllInOneMaterialSelection: false **</summary>
  Shows radio btns for material selection of all the colors. eg:vifloor

   <img src="https://demo.explorug.net/documentationImages/hasAllInOneMaterialSelection.png" alt='hasAllInOneMaterialSelection' width="300"/>

  </details>


- <details><summary>**allInOneMaterialSelection **</summary>
    Done in vifloor, obeeteeusa.<br/>
    Should be set in following syntax: (example)<br/>

  ```json
  {
    "allInOneMaterialSelection": {
      "groupLabel": "Construction",
      "values": ["Cut Pile", "Tip Shear"],
      "labels": ["Cut Pile", "Tip Shear"],
      "selectedValue": "Cut Pile"
    }
  }
  ```

  `groupLabel`: Label of the component <br/>
  `values`: Values of the radio buttons <br/>
  `labels`: Labels of the radio buttons <br/>
  `selectedValue`: Default Value of the material (selected material)
  <br/>
  <img src="https://demo.explorug.net/documentationImages/hasAllInOneMaterialSelection.png" alt='hasAllInOneMaterialSelection' width="300"/>

  </details>

- <details><summary>**shape: CIRCLE **</summary>
  Shape of the color swatch 
  Shape can be one Of `(["CIRCLE", "RECTANGLE_H", "SQUARE", "RECTANGLE_V"])` <br/>
  But RECTANGLE_H" and  "RECTANGLE_V" are for mixply colors only. Mixply works for SQUARE and RECTANGLE as well <br/>
  example: for shape: "SQUARE" <br/>

   <img src="https://demo.explorug.net/documentationImages/shape-SQUARE.png" alt='shape-SQUARE' width="300"/>

  </details>


- <details><summary>**mixPlyOptions **</summary>
   For mixply colors feature  hasMixPly flag should be set to 1 or 2(true).
  Should be set as below: <br/>

  ```json
  {
    "mixPlyOptions": [
      { "ply": 1, "text": "Single Color" },
      { "ply": 3, "text": "Mix Ply" }
    ]
  }
  ```

    <br/>
    It shows a dropdown in color name and when Mixply is chosen, it shows 3 colors in place of 1. <br/>
    <img src="https://demo.explorug.net/documentationImages/mixPlyOptions.png" alt='mixPlyOptions' width="300"/>  
  </details>

- <details><summary>**sameColorLock: false **</summary>
    When this flag is true and design has any 2 colors same then when 1 of them is changed then both color changes. It locks the colors that are same and changes both whenever 1 is changed.
    </details>

- <details><summary>**sameMaterialForAll: false **</summary>
    Applies same material for all colors.
  </details>

- <details><summary>**exclusiveMatArr **</summary>
  If `exclusiveMatArr: [0, 1]`, then if material 0 and 1 are exclusive. <br/>
  If `exclusiveMatArr: [[0,1],2]`, then material 0,1 can appear together but not with material 2.
  </details>

- <details><summary>**showMultipleMatDropdowns: false **</summary>
  To show multiple material dropdowns in place of 1. 
  Syntax: <br/>
  ```json
  {
    "multipleMatDropdowns": {
      "first": [],
      "second": []
    }
  }
  ```
  Example:

  </details>

- <details><summary>**setCustomPileHgtNameOnSelection: false **</summary>
    Background context: Material and Pilehaight names are taken from backend -> interfaceElements. To change english names of materials or to hide any material -> allTex3.dat file should be changed. However, Material names in different languages can be taken from flag -> strings -> color.<br/>
    But allTex3.dat cannot change texts for Standard, low, high (pileheights). <br/>
    To change the texts for these words when a pileheight is selected from the given options, this flag is used. <br/>

    Takes Pile Height name from the `language -> strings -> color -> customPileheightNameOnSelection` <br/>
    Example: to change default pileheight names: <br/>
    Set setCustomPileHgtNameOnSelection: true and add following in string of flags.json

    ```json

    "strings": {
      "color": {
        "customPileheightNameOnSelection": {
          "defaultPileheightNames": ["Std", "L", "H"]
        }
      }
    } 

    ```

    </details>

- <details><summary>**showTexture: false **</summary>
    To show texture in the color swatches.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showTexture-true.PNG" width="300"/>
    <br/>
    For showTexture: true
    </details>

- <details><summary>**colorNamePrefix: "" **</summary>
    To add a text infront of color name. It needs to be string.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/colorNamePrefix-Laxmi.PNG" width="300"/>
    <br/>
    For colorNamePrefix:colorNamePrefix-Laxmi
    </details>

- <details><summary>**toolTipOnColorBoxHover: false **</summary>
    When true, it shows a tooltip on color box hover.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/toolTipOnColorBoxHover-true.png" width="300"/>
    <br/>
    For toolTipOnColorBoxHove:true
    </details>

- <details><summary>**colorSelectionDialogBoxPosition: left **</summary>
     To set position of the color selection dialog box. <br/>
     Can be 'left', 'top', 'bottom', 'right'.
  </details>

- <details><summary>**showAutoColorDropdown: true **</summary>
  To hide/show auto color options.

  <img src="https://demo.explorug.net/documentationImages/showAutoColorDropdown.png" alt='showAutoColorDropdown' width="300"/>

  </details>


- <details><summary>**autoColorOptions: null **</summary>
  Set if there are other auto color options other than the default list. We haven't used this on any account yet.
  </details>

- <details><summary>**differentSymbolForAllColors: false **</summary>
  When true, it show different color numbers for all the colors even though the colors are same.
  <br/>
  <img src="https://demo.explorug.net/documentationImages/ifferentSymbolForAllColors-true.PNG"  width="200"/>
  <br/> 
  For differentSymbolForAllColors:true
  </details>

- <details><summary>**showColorPomsImages: false **</summary>
    Shows Color poms images. <br/>
    <img src="https://demo.explorug.net/documentationImages/showColorPomsImages-true.PNG" alt='showColorPomsImages' width="200"/>   
    <br/>
    For showColorPomsImages:true
  </details>

- <details><summary>**allowPaletteFromImage: false **</summary>
  Allows users to upload images to extract colors from. <br/>
  <img src="https://demo.explorug.net/documentationImages/allowPaletteFromImage.png" alt='allowPaletteFromImage' width="200"/> 
  </details>

</details>

## Language

<details><summary>**language **</summary>

  - <details><summary>**langOptions: null **</summary>
      Available Languages: <br/>

      ```json
        "language": {
            "langOptions": [
              {
                "val": "en",
                "text": "English"
              },
              {
                "val": "fr",
                "text": "French"
              },
              {
                "val": "de",
                "text": "German"
              },
              {
                "val": "es",
                "text": "Spanish"
              },
              {
                "val": "it",
                "text": "Italian"
              }
          ]
        }
      ```
  </details>


  - <details><summary>**translateNames: false **</summary>
    Use this flag to show different names of rooms than their filenames.
  </details>

  - <details><summary>**strings **</summary>
    Strings can be set in 2 ways. <br/>
    1. When only english language is used.
    2. When different languages are to be tranlated.

    - When only english language is used. <br/>
      - directly pass the key of the words to change.

      ```json

      "strings": {
          "visualization": {
          "visualization": "Zoom out",
          "photorealistic": "Zoom in",
          }
      }

      ```

    - When different languages are to be tranlated. <br/>
      - set which language is to be changed and then pass the key of the words/phrases.

      ```json

        "strings": {
        "en": {
          "visualization": {
            "visualization": "Zoom out",
            "photorealistic": "Zoom in",
          }
        },
        "fr": {
          "visualization": {
            "visualization": "Saano",
            "photorealistic": "Thulo",
          }
        }
      }

      ```

  </details>

</details>
  
## Order Sheet

<details><summary>**showOrdersheetOutside:false **</summary>
  To show ordersheet outside (under colors) instead of showing a ordersheet button. This feature is in jpeg account for enabling this feature on area rug, css modification is required:
  at-section-container{
    max-height: 300px;
    overflow: auto;
}
  }
  <br/>
  for showOrdersheetOutside:true <br/>
  <img src="https://demo.explorug.net/documentationImages/showOrdersheetOutside-true.png" alt='showOrdersheetOutside-true' width="200"/>

</details>

<details><summary>**showOrdersheetOutsideInJpeg:true **</summary>
  In jpeg accounts, ordersheets are shown by default as there are no colors on right sidebar.
</details>

<details><summary>**ordersheet **</summary>

  - <details><summary>**panel: right **</summary>
      In which panel to keep ordersheet.
    </details>

  - <details><summary>**showRugSizeInOrderForm: true **</summary>
    To show/hide Rugsize (total area) in Ordersheet
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showRugSizeInOrderForm-true.PNG" width="400"/>
    <br/>
    For showRugSizeInOrderForm: true
    </details>

  - <details><summary>**isContactNumberMandatory: false **</summary>
    To make Contact Number Mandatory. Contact Number field comes after clicking "Request Quote" button.
    </details>

  - <details><summary>**isRugsizeMandatory: false **</summary>
    To make Rug size Mandatory. Rug size field comes after clicking "Ordesheet" button.
    </details>

  - <details><summary>**isNotesMandatory: false **</summary>
    To make Notes mandatory.  Notes field comes after clicking "Request Quote" button
    </details>

  - <details><summary>**checkMandatoryForRequestQuote: false **</summary>
    To make explorug check if all the mandatory fields are fulfilled before opening Request quote. This comes in action after we set  flag mandatoryCustomFields: ["Customer Name"].
    </details>

  - <details><summary>**showTotalAreaInYards: false **</summary>
    to show Total Area In Yards. For enabling this feature,  showRugSizeInOrderForm:true should also be set.
    </details>

  - <details><summary>**showAreaInM2: false **</summary>
    To show Area in meter square (M2)
    </details>

  - <details><summary>**showAreaInM2InOrdersheetOnly: false **</summary>
    To show Area in meter square (M2) in Ordersheet Only. To show area only after "Save OrderSheet" button is clicked.

    </details>
        
  - <details><summary>**currencyFormat: 0 **</summary>
    It can be  0 or 1 or 2 for None, US and EU respectively. Need backend operation as well for enabling. <br/>
    `  None: 0,`<br/>
    `  US: 1 `<br/>
    `  EU: 2`<br/>
    </details>
      
  - <details><summary>**populateRugSize: true **</summary>
    To populate rugsize in the ordersheet i.e to put certain values in width and height fields.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/populateRugSize-true.PNG" width="400"/>
    <br/>
    For populateRugSize:true
    <br/>
   <img src="https://demo.explorug.net/documentationImages/populateRugSize-false.PNG" width="400"/>
    <br/>
    For populateRugSize:false (Width and Height input fields is empty)
    </details>
      
  - <details><summary>**noRugSizeInPdfForBlankSizeInput: false **</summary>
    To not show rugsize in ordersheet pdf when size input is left blank. <br/>
    when true, size in pdf will be blank if size input is blank. use with populateRugSize=true [done in obeetee vifloor]. Deprecated!
    <br/>

    </details>
      
  - <details><summary>**addMaxCharacterInFormFields **</summary>

    Example: to add max count text after form fields: <br/>

    ```json
      "addMaxCharacterInFormFields":[{ "fieldName":"Additional Instructions", "count": 230}]
    ```

    </details>

  - <details><summary>**changeableUnits: true **</summary>
    To allow users to change units in ordersheet. <br/>
    Unit is always set to defaultUnit when it's false. If changeable unit is set to false , the flag defaultUnit should be set as defaultUnit:'ft'.
    </details>

  - <details><summary>**strInPrice: SILK **</summary>
    String to show instead of price eg: in hollyhunt, silk % (100% SILK) is shown instead of price ($100)
    <br/>
    <img src="https://demo.explorug.net/documentationImages/strInPrice-Silk.PNG" width="200"/>
    <br/>
    For strInPrice: "SILK"
    </details>

  - <details><summary>**autoPopulateFields **</summary>
      example:

    ```json
    "autoPopulateFields": ["Shape"]
    ```

    List name of ordersheet field you need to populate dynamically and add condition in getCustomFieldValue() function in ordersheet/index file

    </details>

  - <details><summary>**mandatoryCustomFields **</summary>
    Field names of custom fields that are mandatory
    <br/>
    This flag is used to make the form fields mandatory that comes after clicking "Ordersheet" button.
    For example:
    <br/>
    mandatoryCustomFields: ["Customer Name","Additional Instructions"]
    </details>

  - <details><summary>**readOnlyAutoPopulate: false **</summary>
      Set it true if the field/s passed in autoPopulateFields is ReadOnly.  <br/>
      Example, if there is `"autoPopulateFields": ["Additional Instructions"]`, then Additional Instructions field will be autopopulated and value will not be changeable
    </details>


  - <details><summary>**roundOffToFtOrCm: false **</summary>
    To Round off decimal values of design size to ft to cm.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/roundOffToFtOrCm-true.PNG" width="200"/>
    <br/>
    For roundOffToFtOrCm:true
    <br/>
    <br/>
    <img src="https://demo.explorug.net/documentationImages/roundOffToFtOrCm-false.PNG" width="200"/>
    <br/>
    For roundOffToFtOrCm:false
    </details>


  - <details><summary>**roundOffToNearestHalf: false **</summary>
    To round off decimal values of design size to nearest .5 decimal values.
    </details>


  - <details><summary>**roundOffToNearest5: false **</summary>
    To round off design size values to nearest number divisible by 5.
    </details>
        
  - <details><summary>**allowColorOnlyAfterSizeInput: false **</summary>
    To allow color selection only after the size input is done. Only for Jaipurrugs , cannot be done on other account. Example: Jaipurrugs
    
    </details>
        
  - <details><summary>**closeAfterEmailSent: true **</summary>
    To close dialog box after the email is sent.
    </details>
        
  - <details><summary>**addedCustomFields **</summary>

      </details>

  - <details><summary>**customRugQualities **</summary>
     Used very less. (deprecated)

    ```json
      "customRugQualities": {
        { "quality": "SuperFine Handloom", "knots": 50, "lines": 46 },
        { "quality": "100 Knot", "knots": 42, "lines": 32 },
        { "quality": "60 Knot", "knots": 33, "lines": 16 }
      }
    ```
    </details>

  - <details><summary>**sameWidNHgt: false **</summary>
    To keep width and height of rugs equal. If design has same width and height, changing one should change other.
    </details>

  - <details><summary><div class="dimmed">storeFieldsValueInLocal:[]</div></summary>
    To store any filed values in local storage. Not used commonly.
    </details>

  - <details><summary><div class="dimmed">getEmailDetailsFromSStorage: false </div></summary>
     To take Email address From Session Storage. Email can be passed in url as `&ce=smth@explorug.net`. (can be used in iframe, when owner has email address of clients)
      </details>


  - <details><summary>**changeActualRugSize: false **</summary>
    To change rug's actual physical width and physical height when size input is changed.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/changeActualRugSize-true.PNG" width="200"/>
    <br/>
     For changeActualRugSize:true

    </details>

  - <details>
    <summary><div class="dimmed">repeatRugInArea: false </div></summary>
    Used for border rugs tool. Not used commonly
    </details>


  - <details><summary>**designsToHideRugSizeFor: [] **</summary>
    To hide rugsize for specific designs. Pass the design name list in array.
    </details>

  - <details><summary>**customConversion **</summary>
    To set custom rule for conversion. 
    ```json
      "customConversion": {
        "setCustomConversion": true, //for therugest, hiphome
        "customInToCmFactor": 2.5
      }
    ```
    This means 2.5 inches will be equal to 1 cm.

    </details>

  - <details><summary>**upperCasedDesignNameinPDF: false **</summary>
     For uppercasing designs name in downloaded pdf.
     <br/>
     <img src="https://demo.explorug.net/documentationImages/upperCasedDesignNameinPDF-true.PNG" width="400"/>
     <br/>
     For upperCasedDesignNameinPDF:true
     <br/>
     <img src="https://demo.explorug.net/documentationImages/upperCasedDesignNameinPDF-false.PNG" width="400"/>
     <br/>
     For upperCasedDesignNameinPDF:false
   </details>
      
  - <details><summary>**PDF_Filename: Default **</summary>
     For file name in downloaded pdf.
     <br/>
     <img src="https://demo.explorug.net/documentationImages/PDF_Filename-1.PNG" width="200"/>
     <br/>
     For PDF_Filename:1
     <br/>
     <img src="https://demo.explorug.net/documentationImages/PDF_Filename-0.PNG" width="200"/>
     <br/>
     For PDF_Filename:0
   </details>
      
  - <details><summary>**dateFormat: 0 **</summary>
     <img src="https://demo.explorug.net/documentationImages/dateFormat-0.PNG" width="200"/>
     <br/>
     For dateFormat:0
     <br/>
     <img src="https://demo.explorug.net/documentationImages/dateFormat-1.PNG" width="200"/>
     <br/>
     For dateFormat:1
   </details>
      
  - <details><summary>**hasShapeOptions: null **</summary>
     <img src="https://demo.explorug.net/documentationImages/hasShapeOptions.PNG" width="400"/>
     <br/>
     For hasShapeOptions= {
      options: ["Rectangle", "Square", "Circle"],
      defaultOptionIndex: 0,
      customFieldId:"jp_shape"
     },

  
   </details>
      
  - <details><summary>**showSummary: false **</summary>
     Shows size, quality as text. Done in Jaipurrugs
     <br/>
     <img src="https://demo.explorug.net/documentationImages/showSummary-true.PNG" width="200"/>
     <br/>
     For showSummary:true
   </details>
      
  - <details><summary>**hasMinAreaCriteria: 0 **</summary>
  
   </details>
      
  - <details><summary>**minAreaCriteriaMsg:  **</summary>
  
   </details>
      
  - <details><summary>**designImageZoom: 1 **</summary>
  
    </details>
      
  - <details><summary>**showRoomView: false **</summary>
      Saves ordersheet pdf with roomview when true
    </details>
      
  - <details><summary>**sameColorDifferentSymbol: false **</summary>
  


    </details>
      
  - <details><summary>**showPileHeightNames: false **</summary>
  
    </details>
      
  - <details><summary>**sendEmailDirectlyWithoutRequestQuote: false **</summary>
      To send Email Directly without showing Request Quote dialog box.
      If this flag is true, Request quote dialog box wont't be shown. Instead, an email will be sent to the email address that is mentioned in `sendDirectEmail` flag.
      <br/>
      <img src="https://demo.explorug.net/documentationImages/sendEmailDirectlyWithoutRequestQuote-true.PNG"  width="200"/>
      <br/>
      For sendEmailDirectlyWithoutRequestQuote: true 
      <br/>
      <br/>
      <img src="https://demo.explorug.net/documentationImages/sendEmailDirectlyWithoutRequestQuote-false.PNG" width="200"/>
      <br/>
      For sendEmailDirectlyWithoutRequestQuote: true
    </details>
      
  - <details><summary>**sendDirectEmail **</summary>
    `sendEmailDirectlyWithoutRequestQuote` flag should be true for this flag to work.
    Syntax: <br/>

    ```json
      {
        "sendDirectEmail": {
          "name": "",
          "email": "alita@explorug.net",
          "phone": ""
        },
      }
    ```
    An ordersheet email will be directly sent to email address mentioned in this flag. 

  - <details><summary>**showSendtoPrint: false **</summary> 
    To show/hide Send to print button.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showSendtoPrint-true.PNG" width="400"/> 
    <br/>
    For showSendtoPrint:true
    </details>
      
  - <details><summary>**showTearSheet: false **</summary>
    To show tearSheet button
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showTearSheet-true.PNG" width="200"/> 
     <br/>
    For showTearSheet:true
     <br/>
    For defaultTearsheetIndex:1
    <br/>
    <img src="https://demo.explorug.net/documentationImages/showTearSheet-true.PNG" width="200"/> 
    <br/>
     For defaultTearsheetIndex:0 && For showTearSheet:true
    </details>
      
  - <details><summary>**defaultTearsheetIndex: 1 **</summary>
    Index of the default tearsheet selected. Documented and image shown in showTearSheet flags.
    <br/>
    <img src="https://demo.explorug.net/documentationImages/defaultTearsheetIndex-0.PNG" width="200"/>
    <br/>
    For defaultTearsheetIndex:0 

    </details>

</details>

## Email

<details><summary>**email **</summary>

  - <details><summary>**setCustomEmail: false **</summary>
    To Set Customer Email Address 
    </details>
      
  - <details><summary>**customerEmailBody: null **</summary>
    To Set Customer Email Body
    </details>
      
  - <details><summary>**customerEmailSubject: null **</summary>
    To Set Customer Email Subject
    </details>
      
  - <details><summary>**customerEmailFromAddress: null **</summary>
    To Set Customer Email From Address (Address from which email will be sent to customer)
    </details>
      
  - <details><summary>**companyEmailBody: null **</summary>
    To Set Company Email Body
    </details>
      
  - <details><summary>**companyEmailSubject: null **</summary>
    To Set Company Email Subject
    </details>
      
  - <details><summary>**companyEmailFromAddress: null **</summary>
    To Set Company Email from Address (Address from which email will be sent to company)
    </details>
      
  - <details><summary>**AddCustomTextInDefaultEmail: false **</summary>
    To Add Custom text in default email at the end of the email body.
  </details>
      
  - <details><summary>**customerEmailFrontText: null **</summary>
    To add custom text in email at the front of the customer email body.
  </details>
      
  - <details><summary>**companyEmailFrontText: null **</summary>
    To add custom text in email at the front of the company email body.
  </details>
      
  - <details><summary>**footer: null **</summary>
    To add Footer in the email body
  </details>
  
</details>
  
## Account Specific Flags
  These are account Specific flags (developed for specific purpose of specific client)
<details><summary>**accountSpecific**</summary>
  
  - <details><summary>a. For Price estimation - davisrugs</summary>
    <img src="https://demo.explorug.net/documentationImages/checkKeyForPrice-true.PNG" width="200"/> 
    <br/>
    For checkKeyForPrice:true
    <br/>
      ```json
        {
          "accountSpecific": {
            "priceEstimation_davisLandings": {
              { 
                  "checkKeyForPrice": true,  //user should enter password (key) to get price estimation
                  "priceEstimationKey": "123", //Password or key that should be entered
                  "currency": "$", //Currency for price
                  "constants": { 
                    "silkMaterialIndices": [1, 2], 
                    "stocksilk": ["W010", "W011", "W013", "W019", "W020", "W021", "W108", "W328", "W711"] 
                    //these silk will cost less
                  },
                  "variables": {
                    "RugTypes": {  //types of rug that user can select from.
                      "title": "Rug Types", //shown in radio buttons
                      "options": ["Area Rug", "Strike off"] 
                    },
                    "RugTechniques": {
                      "title": "Rug Techniques",
                      "options": ["CYP Tuft", "Hand Tuft", "Handknot"]
                    }
                  }
                }
            }
          }
        }
      ```
      </details>

  - <details><summary>b. For One act folder</summary>
      <br/>

      - In explorug any folder can be declared as One Act folder. <br/>
      - Designs in the one act folder must have only 4 colors.  <br/>
      - However, second color and third color remain hidden in explorug.  <br/>
        Only two colors are shown out of which only 1 is changeable. <br/>
      
          Example:  
      <br/>

      <img src="https://demo.explorug.net/documentationImages/oneAct.png" alt='oneAct.png' width="200"/>
      <br/>
      In this example: only 2 colors out of 4 colors of designs are shown. Only 1st color is customizable. 
      when color1 is changed, all the other 3 colors are selected accordingly and applied. <br/>
      Json to set one act folder <br/>

      ```json
        {
          "accountSpecific": {
            "oneAct": {
              "hasOneActFolder": true, //set it true to enable one-act functionalities.
              "folder": "folder name"  //set the name of the one-act folder 
            }
          }
        }
      ```
    </details>

  - <details><summary>c. Jaipurrugs</summary>
    In Jaipurrugs, customization process if divided into 3 steps; Size, color and summary using following code. <br/>

      ```json
        {
          "accountSpecific": {
            "jaipurrugs":{
              "showCodeUnderDesignName": false  //To show design code under design name
            },
            "hasCustomizationSteps": {
              "hasStepwiseButtons": true, 
              "steps": [
                {
                  "index": 1,
                  "className": "first",
                  "text": "Size"
                },
                {
                  "index": 2,
                  "className": "second",
                  "text": "Color"
                },
                {
                  "index": 3,
                  "className": "third",
                  "text": "Summary"
                }
              ],
              "defaultStepNum": 1,
              "iconPath": "./v3assets/Jaipur/"
            }
          }
        }
      ```
      <br/>
      <img src="https://demo.explorug.net/documentationImages/accountSpecific-jaipurrugs.png" alt='accountSpecific-jaipurrugs.png' width="300"/>
    </details>

  - <details><summary>d. sendToApp</summary>
    Use folowing code to set it false/true. It's false by default.

    ```json
      {
        "accountSpecific": {
          "sendToApp": false
        }
      }
    ```
    <br/>
    <img src="https://demo.explorug.net/documentationImages/sendToApp.png" alt='sendToApp.png' width="300"/>
  </details>
- <details><summary>e. isPaulig</summary>
   Use folowing code to set it false/true. It's false by default.
   <br/>
    ```json
      {
        "accountSpecific": {
          "isPaulig": true,
        }
      }
    ``` 
    <br/>
    <img src="https://demo.explorug.net/documentationImages/pauligcolorselectionbox.PNG" alt='sendToApp.png' width="300"/> 
    <br/>
    For  "isPaulig": true and after clicking used color(circle)
  </details>
</details>

##  Controller

<details><summary>**controller **</summary>
  To view Controller view; add `&pageview=conteoller` in the url. <br/>
  example: https://v3.explorug.com/explorug.html?page=ruglife&pageview=controller 
  <br/>
  <img src="https://demo.explorug.net/documentationImages/controller.png" alt='controller.png' width="300"/>

  - <details><summary>**Folder1Name: "ART ACRYLIC" **</summary>
    Name of folder from where designs will be taken for 1st tab
    </details>
      
  - <details><summary>**Folder2Name: "CLASSIC" **</summary>
    Name of folder from where designs will be taken for 2nd tab
    </details>
      
  - <details><summary>**passJsonOnDesignChange: 1 **</summary>
      When Design is clicked, a message is passed to the parent page. Format of the messsage can be either string or json. 
      <br/>
      Set `passJsonOnDesignChange: 0`, to pass fullpath of 1x design
      Set `passJsonOnDesignChange: 1`, to pass json of the design path in format `{ triggeredDesign: selectedFile.fullPath };`
      set `passJsonOnDesignChange: 2`, to pass both room and design image in following json format.

      ```json
      {
        "design": "design image",
        "room": "room image"
      }
      ```
    </details>
      
  - <details><summary>**passJsonOnRoomViewChange: 1 **</summary>
    When Room is clicked, a message is passed to the parent page. Format of the messsage can be either string or json. 
      <br/>
      Set `passJsonOnRoomViewChange: 0`, to pass roompath as string.
      Set `passJsonOnRoomViewChange: 1`, to pass json of the Room path in format `{ initview: roomPath };`
      set `passJsonOnRoomViewChange: 2`, to pass both room and design image in following json format.

      ```json
      {
        "design": "design image",
        "room": "room image"
      }
      ```
    </details>
      
  - <details><summary>**passJsonOnDetailViewChange: 1 **</summary>
      When detail view is clicked, a message is passed to the parent page. Format of the messsage can be either string or json. 
      <br/>
      Set `passJsonOnDetailViewChange: 0`, to pass rendered image as string.
      Set `passJsonOnDetailViewChange: 1`, to pass json of the view mode in format `{ initview: 'perspective' };`
      set `passJsonOnDetailViewChange: 2`, to pass both view and design image in following json format.

      ```json
      {
        "design": "design image",
        "room": "room image"
      }
      ```
    </details>
      
  - <details><summary>**showDesignsNRooms: 1 **</summary>
      Set it true to show design and room in tabs.
      Set it false to load designs from different folders in the tabs.
    </details>
</details>

## Explorug Data

<details><summary>**explorugData **</summary>
  explorugData is data that explorug passes to parent when required. 
  <br/>
  explorugData is of the format:

  ```json
    {
      "DesignInfo": null,
      "DesignColors": [], //array of colors
      "IsIrregular": false,
      "PhysicalHeight": 10.17,
      "PhysicalWidth": 8.12,
      "PixelHeight": 1220,
      "PixelWidth": 974,
      "Unit": "ft",
      "ctfurl": "/Cache/796826D764664E6CEECFF25F2BCA3478/Temp/58C6137F012C83BE/2022-06-15-09-24-38-0014-Cubinia/Cubinia.ctf",
      "customerid": null,
      "designid": null,
      "explorugDomain": "https://v3.explorug.com",
      "file": "Designs/Cubinia.ctf",
      "imageurl": "/Cache/796826D764664E6CEECFF25F2BCA3478/Temp/58C6137F012C83BE/2022-06-15-09-24-38-0014-Cubinia/Cubinia.jpg",
      "pdfurl": "/Cache/796826D764664E6CEECFF25F2BCA3478/Temp/58C6137F012C83BE/2022-06-15-09-24-38-0014-Cubinia/Cubinia.pdf",
      "price": {"Currency": "$", "Value": "10358.00"},
      "propsid": "H4sIAAAAAAAEAMWWX2vbMBTFv4rRXvOgK9n6k7fYTjbYsmUMCqP0QWvvUlFHLrI96Ea%2f%2b1TWxovb2S6Y%2bVG6HF3uj6Mjnf8iWVmUnizJm9VmxVROFn92PpoDht1Pd1WNPto21bUvy0OofjXe5VgbW1Rkef56%2fdaEDWsKsuT3FyfLBdnZAt%2bh3V%2fXYUnDScb%2fsG5Plt9NUeGCvHdlHbpyxSDRodw8rEAITR%2b7Zk1Vlwf703wrQvfaN9h2eKnWNnyp%2btj%2beel%2b8dfcmrGUQWfuz411lxh9QbzqYzZC2wKCU15wyiv5Ny%2bgIpb8iZeWUs%2bIay3WkKedkXd4e4v%2bYF0dvfXmrg%2fZSH3LiZ5io%2bOxCS1pazMpIJmRGwBsYtaZOzf%2bJkqLBvuIDSonYMWoTBg8sUqU1rN6TCp4FkU7626iHZau316D0kkupOY0OTorpgAz0lJc83jVGXlbVlW4S4iuj9awdAJaCmLWXkMa2M0IK89Wa9VN7LMQPGaPURoO772Ko9QTIBM6jo%2f%2bElLPGVxxnmiRdWb%2bgOYK3WB0jdBOEfShSWswDnP6K4Xwj%2bKdiR%2fetGFzDUuniC6l6DHnGXA5I6tNst7kXXecGWeLwkSZR9P7Xx2lnuJplHHrLs71%2fyZ28RusIrYe5QsAAA%3d%3d",
      "text": "",
      "userid": null,
      "view": "",
      "viewurl":""
    }
  ```
  <br/>
  
  Adds `designId` key in explorug data and passes design name in it. (done for jaipurrugs)
      
  - <details><summary>**passQualityFromFolderName: false **</summary>
    Quality is taken from foldername
    </details>
      
  - <details><summary>**sendOrigDesignColors: false **</summary>
    To send original design colors 
    </details>
      
  - <details><summary>**passTotalArea: false **</summary>
    To pass total are of the rug  in explorugData
    </details>
</details>

## Rooms control

- <details><summary>**roomsControl:[] **</summary>
    To show/hide specific rooms when certain design is selected. <br/>
    Format: <br/>

    ```json
      {
        "roomsControl": [
          {
            "rooms": ["Living Room", "Office"],
            "design": "/folder1/design1"
          },
          {
            "rooms": ["Bedroom 1", "Bedroom 2"],
            "design": "/folder2/design2"
          }
     ]
      }
    ```
    This code will show rooms Living Room.crf3d and Office.crf3d and hide all other rooms when design1 of folder1 folder is selected. <br/>
    and shows rooms Bedroom 1.crf3d, Bedroom 2.crf3d when design2 of folder2 is selected.
  </details>

- <details><summary>**showAllRoomsWhenNoRoomsSelected: true **</summary>
    when rooms is blank in roomControl flag, all rooms are shown by default. To change this, you can set this flag to false. `showAllRoomsWhenNoRoomsSelected: false`.

     ```json
      {
        "roomsControl": [
          {
            "rooms": [],
            "design": "/folder1/design1"
          }
        ]
      }
    ```
  </details>
      
- <details><summary>**checkRoomsControlForVariations: false **</summary>
    By default, rooms control flag is checked for original design only. 
    If variations are also to be checked for room control flag, then set it to true.
  </details>
      
- <details><summary><div class="dimmed">designSpecific: null</div></summary>
    Done for bordertool. Not needed.
    Format: <br/>

    ```json
      "designSpecific": [
    {
      "name": "Plateau",
      "showBorder": true,
      "orderInfo": {
        "Knots/sq in": "250 Knots",
        "Knots Type": "Superfine Handloom",
        "Pile Height": "6mm",
        "Lead Time": [
          { "size": [5, 7], "unit": "ft", "value": "12 weeks" },
          { "size": [8, 10], "unit": "ft", "value": "12 weeks" },
          { "size": [9, 12], "unit": "ft", "value": "16 weeks" },
          { "size": [10, 14], "unit": "ft", "value": "18 weeks" },
          { "size": [12, 15], "unit": "ft", "value": "20 weeks" }
        ]
      }
    },
    {
      "name": "Shibori Diamond",
      "showBorder": false,
      "orderInfo": {
        "Knots/sq in": "100 Knots",
        "Knots Type": "Handknotted",
        "Pile Height": "7mm",
        "Lead Time": [
          { "size": [5, 7], "unit": "ft", "value": "16 weeks" },
          { "size": [8, 10], "unit": "ft", "value": "18 weeks" },
          { "size": [9, 12], "unit": "ft", "value": "20 weeks" },
          { "size": [10, 14], "unit": "ft", "value": "24 weeks" },
          { "size": [12, 15], "unit": "ft", "value": "26 weeks" }
        ]
      }
    }
  ],
    ```
    <br/>

  It shows <badge>Custom Border Design</badge> button for design "Shibori Diamond" as it has "showBorder": false. and hides the button for another design "Plateau". <i>(done in linkoutdoor before: http://linkoutdoor.explorug.com)</i>
  <br/>
  <img src="https://demo.explorug.net/documentationImages/customborderdesign.png" alt='customborderdesign.png' width="300"/>
  </details>
      
## Custom Design (External Design passed through URL)

- <details><summary>**customDesignBaseUrl: null **</summary>
    `corsCustomDesignUrl` shpuld be set true to use this flag. <br/>

    customDesignBaseUrl is the base url for `customdesignurl`. <br/>
    example if design from https://site1.com/folder1/design1.jpg is to be loaded. then 
    `customDesignBaseUrl` should be set to `https://site1.com/folder1/` <br/>
    and in `&customdesignurl=design1.jpg` should be passed in url.  
  </details>
      
- <details><summary>**corsCustomDesignUrl: false **</summary>
    To allow loading of custom design though url. This flag should be on to use `customDesignBaseUrl` and `customdesignurl`.
  </details>
      
- <details><summary>**removeBgForCustomDesign: false **</summary>
    To remove background for custom design url.
  </details>
      

## Other flags

- <details><summary>**panelStateMobile: null **</summary>
    To show right sidebar and hide left sidebar for mobile devices.
    </details>
      
- <details><summary>**initDesignNameInUrl: false **</summary>
    To allow passing of design name in initDesign in url instead of the whole design path. 
  </details>
      








