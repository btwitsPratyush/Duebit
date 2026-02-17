
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Loader2 } from "lucide-react";

interface WaitlistEntry {
    id: string;
    created_at: string;
    name: string;
    firm_name: string;
    email: string;
    phone: string;
    firm_type: string;
}

const AdminWaitlist = () => {
    const [entries, setEntries] = useState<WaitlistEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWaitlist = async () => {
            try {
                const { data, error } = await supabase
                    .from("waitlist")
                    .select("*")
                    .order("created_at", { ascending: false });

                if (error) {
                    console.error("Error fetching waitlist:", error);
                } else {
                    setEntries(data || []);
                }
            } catch (err) {
                console.error("Unexpected error:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchWaitlist();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background text-foreground">
                <Loader2 className="w-10 h-10 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background text-foreground p-8">
            <div className="container mx-auto">
                <h1 className="text-3xl font-bold mb-8 text-white">Waitlist Signups ({entries.length})</h1>

                <div className="rounded-md border border-primary/20 bg-brand-deep/50 backdrop-blur-sm">
                    <Table>
                        <TableHeader>
                            <TableRow className="border-white/10 hover:bg-white/5">
                                <TableHead className="text-white">Date</TableHead>
                                <TableHead className="text-white">Name</TableHead>
                                <TableHead className="text-white">Firm Name</TableHead>
                                <TableHead className="text-white">Email</TableHead>
                                <TableHead className="text-white">Phone</TableHead>
                                <TableHead className="text-white">Type</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {entries.map((entry) => (
                                <TableRow key={entry.id} className="border-white/10 hover:bg-white/5">
                                    <TableCell className="text-muted-foreground font-mono text-xs">
                                        {new Date(entry.created_at).toLocaleString()}
                                    </TableCell>
                                    <TableCell className="font-medium text-white">{entry.name}</TableCell>
                                    <TableCell className="text-white/80">{entry.firm_name}</TableCell>
                                    <TableCell className="text-white/80">{entry.email}</TableCell>
                                    <TableCell className="text-white/80">{entry.phone}</TableCell>
                                    <TableCell className="text-white/80 capitalize">{entry.firm_type}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default AdminWaitlist;
