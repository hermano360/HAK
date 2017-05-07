var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry:[
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals:{
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias:{
      applicationStyles:'app/styles/app.scss',
      page1: 'app/components/page1.jsx',
      page2: 'app/components/page2.jsx',
      Candidates:'app/components/Candidates.jsx',
      Candidate:'app/components/Candidate.jsx',
      CandidatesAPI:'app/api/CandidatesAPI.jsx',
      Navbar: 'app/components/Navbar.jsx',
      Main: 'app/components/Main.jsx',
      custom: 'app/components/custom.js',
      signin: 'app/components/signin.jsx',
      signup: 'app/components/signup.jsx',
      employer: 'app/components/employer.jsx',
      talentsignup: 'app/components/talentsignup.jsx',
      employersignup: 'app/components/employersignup.jsx',
      Query: 'app/components/Query.jsx',
      Querynew: 'app/components/Querynew.jsx',
      Querypast: 'app/components/Querypast.jsx',
      Thankyou: 'app/components/Thankyou.jsx',
      Aboutus: 'app/components/Aboutus.jsx'
    },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
      {
        loader:'babel-loader',
        query:{
          presets: ['react', 'es2015','stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_compenents)/
      }
    ]
  },
  sassLoader:{
    includePaths:[
      path.resolve(__dirname,'./node_modules/foundation-sites/scss')
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
