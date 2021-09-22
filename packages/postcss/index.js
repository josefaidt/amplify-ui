module.exports = (opts = {}) => {
  // Work with options here
  // should get passed an amplify theme object
  console.log(opts);
  return {
    postcssPlugin: '@aws-amplify/postcss',
    Once(root) {
      // Calls once per file, since every file has single Root
      // console.log(root);
      // const decl1 = new Declaration({ prop: 'color', value: 'black' })
      root.append(`:root { ${opts.css.join('')} }`);
    },
    /* */
    // Root (root, postcss) {
    //   // Transform CSS AST here
    //   console.log(postcss);
    //   root.append('html { background: red; }')
    // }

    /*
    Declaration (decl, postcss) {
      // The faster way to find Declaration node
    }
    */

    /*
    Declaration: {
      color: (decl, postcss) {
        // The fastest way find Declaration node if you know property name
      }
    }
    */
  };
};
module.exports.postcss = true;
