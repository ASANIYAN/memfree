import Link from 'next/link';

import { siteConfig } from '@/config/site';
import { cn, nFormatter } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/shared/icons';

export function HeroLanding() {
    // const { stargazers_count: stars } = await fetch(
    //   "https://api.github.com/repos/mickasmt/next-saas-stripe-starter",
    //   {
    //     ...({
    //       headers: {
    //         Authorization: `Bearer`,
    //         "Content-Type": "application/json",
    //       },
    //     }),
    //     // data will revalidate every hour
    //     next: { revalidate: 3600 },
    //   },
    // )
    //   .then((res) => res.json())
    //   .catch((e) => console.log(e));

    return (
        <section className="space-y-6 py-10 sm:py-20 lg:py-20">
            <div className="container flex max-w-5xl flex-col items-center gap-5 text-center">
                {/* Want animations? Check here: https://github.com/mickasmt/next-saas-stripe-starter/blob/76eb9f2b70b29c7a734ff0e5b047796ed2dac28d/app/(marketing)/page.tsx */}
                {/* <Link
                    href={siteConfig.links.twitter}
                    className={cn(
                        buttonVariants({
                            variant: 'outline',
                            size: 'sm',
                            rounded: 'full',
                        }),
                        'px-4',
                    )}
                    target="_blank"
                >
                    <span className="mr-3">🎉</span> Introducing on{' '}
                    <Icons.twitter className="ml-2 size-3.5" />
                </Link> */}

                <h1 className="text-balance font-urban text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-[66px]">
                    AI Ask everything with{' '}
                    <span className="text-gradient_indigo-purple font-extrabold">
                        MemFree
                    </span>
                </h1>

                <p
                    className="max-w-2xl text-balance leading-normal text-muted-foreground sm:text-xl sm:leading-8"
                    style={{
                        animationDelay: '0.35s',
                        animationFillMode: 'forwards',
                    }}
                >
                    AI ask everything about your bookmarks, notes and docs, let
                    MemFree free up your memory capacity
                </p>

                {/* <div
          className="flex justify-center space-x-2 md:space-x-4"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <Link
            href="/blog/memfree-build-1-why"
            prefetch={true}
            className={cn(
              buttonVariants({ size: "lg", rounded: "full" }),
              "gap-2",
            )}
          >
            <span>Learn More</span>
            {/* <Icons.arrowRight className="size-4" /> */}
            </div>
        </section>
    );
}
