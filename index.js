$(function() {
  $('.card').on('mouseenter', onMouseenter);
});

const onMouseenter = e => {
  const element = $(e.target);
  const href = element.find('a').attr('href');
  const portal = $('<portal>')
    .attr('src', href)
    .css({ height: '500px', width: '400px' });
  element.after(portal);
};
