# MathJax 4 with IEEE package and Configurations

This is the IEEE configuration and special macro packages. 

The directory contains 

* MathJax 4 code bundle in `mathjax4`,
* This `README.md` file
* The sample configuration file in `ieee-config.js`
* And two sample files

The IEEE directory consists of the 

## Macro Packages

All macro packages are in the `mathjax4/input/tex/extensions` folder.  The
following are the IEEE specific macro packages.

``` shell
  ieeemacros
  ieeelegacy
  ieeestix
  eulerieee
```

All other packages from MJ2 are either subsumed by existing (and partially
upgraded) MathJax packages or are implemented in new font packages that are now
also part of overall MathJax 4 distribution. These are:

``` shell
  bbm
  bboldx
  dsfont
```

## Configuration

Please add the following configurations to the file, where 

* `PATH-TO-IEEE-CONFIG` is your local path to the configuration file `ieee-config.js` (e.g., `https://ieeexplore-uat.ieee.org/xploreAssets/mathjax4/config/ieee-config.js`). This is currently `./ieee-config.js`.
* `PATH-TO-MATHJAX4` is your local path to the mathjax 4 code bundle. In the example files, this is currently `./mathjax4`.


``` html
<script src="PATH-TO-IEEE-CONFIG/ieee-config.js"></script>
<script id="MathJax-script" async type="module" src="PATH-TO-MATHJAX4/tex-chtml.js"></script>
```

Note, that the order of these commands is important, since the configuration
must be loaded before the MathJax v4 bundle.

## Sample files 

The two included sample files 
``` shell
1_mathjax_ieee_macro_test.html
sample-LaTex-stix.html
```
are those provided by David Starbuck. 

Note that the errors contained in `1_mathjax_ieee_macro_test.html` are the same
as in MJ2.

Additional sample files are the once provided by Murugan Duraisamy

``` shell
mathjax-console-err.html
mathjax-slow.html
```
