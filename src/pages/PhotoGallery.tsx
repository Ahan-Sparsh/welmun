import PageLayout from "@/components/PageLayout";
import { useStaggerReveal } from "@/hooks/useScrollReveal";

const photos = [
  { src: "https://static.wixstatic.com/media/9bbbe8_ff32436f4a324f8684cadec9d813af31~mv2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_ff32436f4a324f8684cadec9d813af31~mv2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_d3ce941c4e35471cbb329ea63211a4db~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_d3ce941c4e35471cbb329ea63211a4db~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_541ded480db24a56a353c369abfba924~mv2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_541ded480db24a56a353c369abfba924~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_5cf87e6db17d4c909aa3bb391a1862a1~mv2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_5cf87e6db17d4c909aa3bb391a1862a1~mv2.jpg", col: 2, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_f4ca83ef5afb47ee8ad80261588b52aa~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_f4ca83ef5afb47ee8ad80261588b52aa~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_0c1e643fd34640f4a1c8c39c6ac3312f~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_0c1e643fd34640f4a1c8c39c6ac3312f~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_608964b9e45b4255bffd28ff310e6b6b~mv2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_608964b9e45b4255bffd28ff310e6b6b~mv2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_717b22345c7849fcbbf7c2a0c9d6e05a~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_717b22345c7849fcbbf7c2a0c9d6e05a~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_c169daa49bd24352bd19ab2843b0bd53~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_c169daa49bd24352bd19ab2843b0bd53~mv2.jpg", col: 2, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_a9e95cd0375d44cf9d3d9f0448c40fbb~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_a9e95cd0375d44cf9d3d9f0448c40fbb~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_631c15005d8e42aeaf5f520ff53f48d0~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_631c15005d8e42aeaf5f520ff53f48d0~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_dc2dc0cdc51340d4b36f8eaa169fed7e~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_dc2dc0cdc51340d4b36f8eaa169fed7e~mv2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_d223ded638be423a98fcdbf8c470fb6d~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_d223ded638be423a98fcdbf8c470fb6d~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_18db60564f2843e3a6429c96b5361add~mv2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_18db60564f2843e3a6429c96b5361add~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_79c19085143348c9a5fc38150fa7c837~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_79c19085143348c9a5fc38150fa7c837~mv2.jpg", col: 2, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_b89e72346b94481c9cf0ba206f1f1d43~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_b89e72346b94481c9cf0ba206f1f1d43~mv2_d_5472_3648_s_4_2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_3ea4fc7204e04e1e844d3f66cc703f24~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_3ea4fc7204e04e1e844d3f66cc703f24~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_4951d33e171e44bba93d687471ef1566~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_4951d33e171e44bba93d687471ef1566~mv2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_92e98852093342d48927bc259af7437d~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_92e98852093342d48927bc259af7437d~mv2_d_5472_3648_s_4_2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_3133b53b2a494066989d48ca30c87f3f~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_800,h_533,q_90,enc_avif,quality_auto/9bbbe8_3133b53b2a494066989d48ca30c87f3f~mv2_d_5472_3648_s_4_2.jpg", col: 2, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_f1f7194c62eb4dc4a39952161bd4bff1~mv2_d_3456_2304_s_2.jpg/v1/fill/w_960,h_640,q_90,enc_avif,quality_auto/9bbbe8_f1f7194c62eb4dc4a39952161bd4bff1~mv2_d_3456_2304_s_2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_f00bea5dd28b4bebaa6a8c40c5e7a8b1~mv2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_f00bea5dd28b4bebaa6a8c40c5e7a8b1~mv2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_5e646b76d29846d680a6b7f291701593~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_5e646b76d29846d680a6b7f291701593~mv2_d_5472_3648_s_4_2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_a7e8a8cf43574ee6bd4edc868a24d852~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_a7e8a8cf43574ee6bd4edc868a24d852~mv2_d_5472_3648_s_4_2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_ae4233d011764c949d6d3f5bb5a89794~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_600,h_400,q_90,enc_avif,quality_auto/9bbbe8_ae4233d011764c949d6d3f5bb5a89794~mv2_d_5472_3648_s_4_2.jpg", col: 2, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_8de47ec44e5540648fdc94eb7a0656ac~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_960,h_640,q_90,enc_avif,quality_auto/9bbbe8_8de47ec44e5540648fdc94eb7a0656ac~mv2_d_5472_3648_s_4_2.jpg", col: 1, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_d9488c3999be40e7b5baae5e159f5a45~mv2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_d9488c3999be40e7b5baae5e159f5a45~mv2.jpg", col: 1, row: 1 },
  { src: "https://static.wixstatic.com/media/9bbbe8_2537dd61df534831a902806a65c27dd7~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_480,h_320,q_90,enc_avif,quality_auto/9bbbe8_2537dd61df534831a902806a65c27dd7~mv2_d_5472_3648_s_4_2.jpg", col: 2, row: 2 },
  { src: "https://static.wixstatic.com/media/9bbbe8_bac18256c0854f64a080d8ced4219221~mv2_d_5472_3648_s_4_2.jpg/v1/fill/w_960,h_640,q_90,enc_avif,quality_auto/9bbbe8_bac18256c0854f64a080d8ced4219221~mv2_d_5472_3648_s_4_2.jpg", col: 1, row: 1 },
];

const PhotoGallery = () => {
  const ref = useStaggerReveal<HTMLDivElement>(60);

  return (
    <PageLayout>
      <h1 className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-[6px] uppercase">
        WELMUN Gallery
      </h1>
      <div className="gold-divider mb-12" />
      <div
        ref={ref}
        className="w-full max-w-[1400px] mx-auto grid gap-1"
        style={{
          gridTemplateColumns: "repeat(4, 1fr)",
          gridAutoRows: "180px",
          gridAutoFlow: "dense",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            data-reveal={i}
            className="img-zoom overflow-hidden relative group"
            style={{
              gridColumn: `span ${photo.col}`,
              gridRow: `span ${photo.row}`,
            }}
          >
            <img
              src={photo.src}
              alt={`WELMUN Gallery ${i + 1}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading={i < 8 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-background/10 group-hover:bg-background/0 transition-colors duration-300" />
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default PhotoGallery;
