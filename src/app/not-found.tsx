import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="py-32 text-center">
      <p className="label">404</p>
      <h1 className="editorial-title mt-5 text-5xl">This page has wandered off.</h1>
      <p className="mx-auto mt-5 max-w-md text-forest/70">
        這條路徑不存在。回到首頁，或從 Beauty Library 繼續閱讀。
      </p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href="/" variant="primary">
          Home
        </Button>
        <Button href="/beauty-library" variant="secondary">
          Beauty Library
        </Button>
      </div>
    </Container>
  );
}
