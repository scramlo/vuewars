interface Developer {
    name: string;
    type: string;
    url: string;
}

interface Maintainer {
    github: string;
}

interface SrcOptions {
    directory: string;
    is_fanon: number;
    is_mediawiki: number;
    is_wikipedia: number;
    language: string;
    min_abstract_length: number | null;
    skip_abstract: number;
    skip_abstract_paren: number;
    skip_icon: number;
    skip_image_name: number;
    skip_qr: string;
    src_info: string;
    src_skip: string;
}

interface Meta {
    attribution: any;
    blockgroup: any;
    created_date: string;
    description: string;
    designer: any;
    dev_date: string;
    dev_milestone: string;
    developer: Developer[];
    example_query: string;
    id: string;
    is_stackexchange: number;
    js_callback_name: string;
    live_date: any;
    maintainer: Maintainer;
    name: string;
    perl_module: string;
    producer: any;
    production_state: string;
    repo: string;
    signal_from: string;
    src_domain: string;
    src_id: any;
    src_name: string;
    src_options: SrcOptions;
    src_url: string;
    status: any;
    tab: string;
    topic: any[];
    unsafe: any;
}

export interface DDGData {
    Abstract: string;
    AbstractSource: string;
    AbstractText: string;
    AbstractURL: string;
    Answer: string;
    AnswerType: string;
    Definition: string;
    DefinitionSource: string;
    DefinitionURL: string;
    Entity: string;
    Heading: string;
    Image: string;
    ImageHeight: string;
    ImageIsLogo: string;
    ImageWidth: string;
    Infobox: string;
    Redirect: string;
    RelatedTopics: any[]; // Define more specifically if structure is known
    Results: any[]; // Define more specifically if structure is known
    Type: string;
    meta: Meta;
}
