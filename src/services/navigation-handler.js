const fn = (name) => `${name.toLocaleLowerCase().replace(/ /g, "-")}.md`;

const loadArticle = (name) => fetch(fn(name)).then((md) => md.text());

export const setArticle = async function (name) {
    let story = await loadArticle(name);
    this.setState({ story: story, name: name });
};
