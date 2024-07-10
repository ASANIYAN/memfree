import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import { UrlTable } from '@/components/urlTable';
import { getUserStatistics } from '@/lib/db';
import { getCurrentUser } from '@/lib/session';
import { Link, Search } from 'lucide-react';
import { redirect } from 'next/navigation';

export default async function page() {
    const user = await getCurrentUser();
    if (!user) {
        redirect('/login');
    }
    const [urls, indexCount, searchCount] = await getUserStatistics(user.id);

    return (
        <ScrollArea className="h-full">
            <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                <div className="flex items-center justify-between space-y-2">
                    <h2 className="text-3xl font-bold tracking-tight">
                        Hi, Welcome back 👋
                    </h2>
                </div>
                <Tabs defaultValue="overview" className="space-y-4">
                    <TabsContent value="overview" className="space-y-4">
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Index Count
                                    </CardTitle>
                                    <Link
                                        size={18}
                                        strokeWidth={2}
                                        color="gray"
                                    ></Link>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-primary">
                                        {indexCount}
                                    </div>
                                    <p className="pt-2 text-xs text-muted-foreground">
                                        bookmarks and urls
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                    <CardTitle className="text-sm font-medium">
                                        Search Count
                                    </CardTitle>
                                    <Search
                                        size={18}
                                        strokeWidth={2}
                                        color="gray"
                                    ></Search>
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold text-primary">
                                        {searchCount}
                                    </div>
                                    <p className="pt-2 text-xs text-muted-foreground">
                                        AI search
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="grid gap-4 grid-cols-1 ">
                            <Card className="col-span-4">
                                <CardHeader>
                                    <CardTitle>Recent Indexed Urls</CardTitle>
                                    <CardDescription>
                                        Recent bookmarks and web pages you have
                                        indexed
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="pl-2">
                                    <UrlTable urls={urls} />
                                </CardContent>
                            </Card>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </ScrollArea>
    );
}
