export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      password: string;
      email: string;
      nomorHandphone: string;
      namaDepan: string;
      namaBelakang: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}