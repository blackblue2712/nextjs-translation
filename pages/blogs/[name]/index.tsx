import useTranslation from "next-translate/useTranslation";

import { useRouter } from "next/dist/client/router";
import Link from "next/link";
import React from "react";
const Blogs = () => {
  const router = useRouter();
  const { t, lang } = useTranslation();

  const dir = lang === "he" ? "rtl" : "ltr";

  


  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
      </nav>

      <div
        style={{
          justifyContent: "center",
          display: "flex",
          flexFlow: "column",
          padding: "24px",
          background: "#ccc",
          width: "332px",
          height: "496px",
          borderRadius: "8px",
          margin: "0 auto"
        }}
      >
        <p>
            router.asPath: {router.asPath}
        </p>
        <p>
          <label>Hello: </label>
          <span style={{ width: "fit-content" }} dir={dir}>
            {t("common:hello")}
          </span>
        </p>
        <p>
          <label>greeting:</label>{" "}
          <span style={{ width: "fit-content" }} dir={dir}>
            {t("common:greeting")}
          </span>
        </p>
        <p>
          <label>money:</label>{" "}
          <span style={{ width: "fit-content" }} dir={dir}>
            {t("common:money")}
          </span>
        </p>
        <p>
          <label>date:</label>{" "}
          <span style={{ width: "fit-content" }} dir={dir}>
            {t("common:date")}
          </span>
        </p>
        <p style={{ width: "fit-content" }} dir={dir}>
          {t("common:something")}
        </p>
      </div>

      <p>
        <ul >
          {router.locales?.map((locale) => {
            return (
              <li key={locale}>
                <Link
                  href={router.asPath}
                  as={router.asPath}
                  locale={locale}
                  passHref
                >
                  <a style={{ textDecoration: "underline", color: "blue" }}>
                    {locale === "he" ? locale + "(RTL)" : locale}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
      </p>
    </div>
  );
};

export default Blogs;
