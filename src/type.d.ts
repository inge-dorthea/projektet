interface GetRouteParams {
  params: {id: string};
}

interface DataList {
  data: [ObjectData];
}

interface ObjectData {
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

type SubpageProps = {
  searchParams: Promise<{id: string}>;
}

interface NavLinkProps {
  subId?: string;
  pageId: number | null;
}

interface ModalProps {
  open: boolean;
  receiverData: ObjectData | null;
  close: () => void;
}

type TextInputProps = {
  id: string;
  label: string;
  error?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

type TextAreaProps = {
  id: string;
  label: string;
  rows: number;
  placeholder: string;
  error: string | undefined;
} & React.InputHTMLAttributes<HTMLTextAreaElement>;