interface Datatype {
  data: [DataObjectType];
}

interface DataObjectType {
  id: number;
  created_at: string;
  fp_img: string;
  sp_img: string;
  alt_img: string;
  sm_img: string;
  art_headline: string;
  weird_text: string;
  fp_weird_text: string;
  name: string;
  article: [string];
  email: string;
}
