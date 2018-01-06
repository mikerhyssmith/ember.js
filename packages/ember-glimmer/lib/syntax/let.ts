import { compileList } from "@glimmer/runtime";

/**
@module ember

/**
  The `let` helper allows the user to introduce bindings into a template.

  ```handlebars
  {{#let (concat (capitalize firstName) (capitalize lastName)) as |fullName|}}
    Hi, my full name is {{fullName}}
  {{/let}}
  ```

  @method let
  @for Ember.Templates.helpers
  @public
*/
export function blockLetMacro(params: any, _hash: any, _default: any, _inverse: any, builder: any) => {
  compileList(params, builder);
  builder.invokeStatic(_default, params.length);
}
