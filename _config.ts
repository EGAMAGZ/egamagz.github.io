import lume from "lume/mod.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import favicon from "lume/plugins/favicon.ts";
import mdx from "lume/plugins/mdx.ts";
import metas from "lume/plugins/metas.ts";
import minify_html from "lume/plugins/minify_html.ts";
import multilanguage from "lume/plugins/multilanguage.ts";
import nav from "lume/plugins/nav.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import postcss from "lume/plugins/postcss.ts";

const site = lume();

site.use(jsx_preact());
site.use(favicon());
site.use(mdx());
site.use(metas());
site.use(minify_html());
site.use(multilanguage());
site.use(nav());
site.use(tailwindcss());
site.use(postcss());

export default site;
