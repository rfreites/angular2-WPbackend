import { Render } from './render';
import { Media } from './media';
import { AcfSliderField } from './acf-slider-field';

export class Post {
    acf: AcfSliderField;
    id: number;
    date: Date;
    modified: Date;
    status: string;
    slug: string;
    type: string;
    title: Render;
    content: Render;
    featured_media: number = null;
}
