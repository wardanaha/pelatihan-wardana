module.exports = {
  // ... other webpack configurations
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i, // Matches .scss and .sass files
        use: [
          // Injects CSS into the DOM as <style> tags
          'style-loader', 
          // Interprets @import and url() like require()/import and resolves them
          'css-loader', 
          // Compiles Sass/SCSS to CSS
          'sass-loader', 
        ],
      },
      // ... other rules for different file types
    ],
  },
};