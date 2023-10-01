module.exports = (hexo) => {
  hexo.config.hexo_encrypt_token = Object.assign(
    {
      enable: true,
      seo: true
    },
    hexo.config.hexo_encrypt_token
  );
  return hexo.config.hexo_encrypt_token;
};
