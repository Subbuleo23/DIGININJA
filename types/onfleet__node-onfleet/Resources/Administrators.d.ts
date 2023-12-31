import { MatchMetadata, OnfleetMetadata } from "../metadata";

declare class Admin {
    create(obj: Admin.CreateAdminProps): Promise<Admin.OnfleetAdmin>;
    deleteOne(id: string): Promise<void>;
    get(): Promise<Admin.OnfleetAdmin[]>;
    matchMetadata: MatchMetadata<Admin.OnfleetAdmin["metadata"]>;
    update(id: string, obj: Admin.UpdateAdminProps): Promise<Admin.OnfleetAdmin>;
}

declare namespace Admin {
    interface OnfleetAdmin {
        email: string;
        id: string;
        isActive: boolean;
        metadata: OnfleetMetadata;
        name: string;
        organization: string;
        phone: string;
        timeCreated: number;
        timeLastModified: number;
        type: "super" | "standard";
    }

    /**
     * email - The administrator’s complete name.
     * name - The administrator’s email address.
     * phone - Optional. The administrator's phone number.
     * isReadOnly - Optional. Whether this administrator can perform write operations.
     */
    interface CreateAdminProps {
        email: string;
        name: string;
        phone?: string | undefined;
        isReadOnly?: boolean | undefined;
    }

    interface UpdateAdminProps {
        email?: string | undefined;
        metadata?: OnfleetMetadata | undefined;
        name?: string | undefined;
    }
}

export = Admin;
