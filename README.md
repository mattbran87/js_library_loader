# JavaScript Library Loader

The JavaScript Library Loader module is a Drupal 7 module used to manage JavaScript libraries that are used throughout a Drupal application. The module consists of a simple config page to add and remove JavaScript libraries stored within the module.

## Installation

* Download the module from Github via terminal or download as a zip file and unpack the zip file.
* Move the directory into your module directory
* Install the module on the module page
* Go to /admin/config/js_library_loader to configure the application and select from existing libraries.

```bash
git clone https://github.com/mattbran87/js_library_loader.git
```

## Usage

The primary function of this module is to make loading JavaScript libraries an easy process. Libraries can be added in the libraries directory in the module.

### Adding a Library

* Create a new directory in the libraries directory of the module. Make sure the directory has the proper access rules.
* In the new directory, add the main file that the library will be loading from.
* In the new directory, add a file called vendor.json. This file contains the configuration rules for the new library.
* Follow the JSON structure below to configure the library. It must have a libraryName and the CDN -> option must be set to true or false. If CDN -> option is set to true it must be given a URL.
* After the library has been added to the directory and the vendor.json configured the library is ready to select on the module config page at /admin/config/js_library_loader.
```javascript
// vendor.json
{
  "libraryName":"Library",
  "libraryUrl":"https://library.js.org/",
  "libraryDocumentationUrl":"https://library.js.org/api.html",
  "CDN":{
    "option":true,
    "url":"https://cdnjs.cloudflare.com/ajax/libs/library.js/4.4.5/library.js",
    "version":"4.4.5"
  },
  "description":"This library is great."
}
```


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)
