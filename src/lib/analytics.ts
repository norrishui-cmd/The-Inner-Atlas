export type AtlasEvent='builder_start'|'builder_step'|'builder_complete'|'email_submit'|'related_content_click';
export function track(name:AtlasEvent,params:Record<string,string|number>={}){if(typeof window==='undefined')return;(window as any).dataLayer?.push({event:name,...params})}
