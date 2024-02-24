/* eslint-disable */
const metadata = {
    models: {
        vehicle: {
            name: 'Vehicle',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                },
                type: {
                    name: 'type',
                    type: 'String',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    backLink: 'vehicles',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Vehicle$createdBy,
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
            discriminator: 'type',
        },
        car: {
            name: 'Car',
            baseTypes: ['Vehicle'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                    inheritedFrom: 'Vehicle',
                },
                type: {
                    name: 'type',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Vehicle',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Car$createdBy,
                    inheritedFrom: 'Vehicle',
                },
                isConvertible: {
                    name: 'isConvertible',
                    type: 'Boolean',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        motorcycle: {
            name: 'Motorcycle',
            baseTypes: ['Vehicle'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                model: {
                    name: 'model',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                year: {
                    name: 'year',
                    type: 'Int',
                    inheritedFrom: 'Vehicle',
                },
                type: {
                    name: 'type',
                    type: 'String',
                    inheritedFrom: 'Vehicle',
                },
                creator: {
                    name: 'creator',
                    type: 'User',
                    isDataModel: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Vehicle',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Motorcycle$createdBy,
                    inheritedFrom: 'Vehicle',
                },
                hasHeatedGrips: {
                    name: 'hasHeatedGrips',
                    type: 'Boolean',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        content: {
            name: 'Content',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    backLink: 'contents',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Content$createdBy,
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
            discriminator: 'contentType',
        },
        post: {
            name: 'Post',
            baseTypes: ['Content'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                    inheritedFrom: 'Content',
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                    inheritedFrom: 'Content',
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                    inheritedFrom: 'Content',
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Content',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Post$createdBy,
                    inheritedFrom: 'Content',
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                    inheritedFrom: 'Content',
                },
                title: {
                    name: 'title',
                    type: 'String',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        video: {
            name: 'Video',
            baseTypes: ['Content'],
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                createdAt: {
                    name: 'createdAt',
                    type: 'DateTime',
                    attributes: [{ name: '@default', args: [] }],
                    inheritedFrom: 'Content',
                },
                updatedAt: {
                    name: 'updatedAt',
                    type: 'DateTime',
                    attributes: [{ name: '@updatedAt', args: [] }],
                    inheritedFrom: 'Content',
                },
                published: {
                    name: 'published',
                    type: 'Boolean',
                    attributes: [{ name: '@default', args: [{ value: false }] }],
                    inheritedFrom: 'Content',
                },
                owner: {
                    name: 'owner',
                    type: 'User',
                    isDataModel: true,
                    isOptional: true,
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'createdBy' },
                    inheritedFrom: 'Content',
                },
                createdBy: {
                    name: 'createdBy',
                    type: 'String',
                    isOptional: true,
                    attributes: [{ name: '@default', args: [] }],
                    isForeignKey: true,
                    defaultValueProvider: $default$Video$createdBy,
                    inheritedFrom: 'Content',
                },
                contentType: {
                    name: 'contentType',
                    type: 'String',
                    inheritedFrom: 'Content',
                },
                name: {
                    name: 'name',
                    type: 'String',
                },
                duration: {
                    name: 'duration',
                    type: 'Int',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        account: {
            name: 'Account',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                userId: {
                    name: 'userId',
                    type: 'String',
                    isForeignKey: true,
                },
                type: {
                    name: 'type',
                    type: 'String',
                },
                provider: {
                    name: 'provider',
                    type: 'String',
                },
                providerAccountId: {
                    name: 'providerAccountId',
                    type: 'String',
                },
                refresh_token: {
                    name: 'refresh_token',
                    type: 'String',
                    isOptional: true,
                },
                access_token: {
                    name: 'access_token',
                    type: 'String',
                    isOptional: true,
                },
                expires_at: {
                    name: 'expires_at',
                    type: 'Int',
                    isOptional: true,
                },
                token_type: {
                    name: 'token_type',
                    type: 'String',
                    isOptional: true,
                },
                scope: {
                    name: 'scope',
                    type: 'String',
                    isOptional: true,
                },
                id_token: {
                    name: 'id_token',
                    type: 'String',
                    isOptional: true,
                },
                session_state: {
                    name: 'session_state',
                    type: 'String',
                    isOptional: true,
                },
                user: {
                    name: 'user',
                    type: 'User',
                    isDataModel: true,
                    backLink: 'accounts',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'userId' },
                },
            },
            uniqueConstraints: {
                provider_providerAccountId: {
                    name: 'provider_providerAccountId',
                    fields: ['provider', 'providerAccountId'],
                },
                id: {
                    name: 'id',
                    fields: ['id'],
                },
            },
        },
        session: {
            name: 'Session',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                sessionToken: {
                    name: 'sessionToken',
                    type: 'String',
                },
                userId: {
                    name: 'userId',
                    type: 'String',
                    isForeignKey: true,
                },
                expires: {
                    name: 'expires',
                    type: 'DateTime',
                },
                user: {
                    name: 'user',
                    type: 'User',
                    isDataModel: true,
                    backLink: 'sessions',
                    isRelationOwner: true,
                    foreignKeyMapping: { id: 'userId' },
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
                sessionToken: {
                    name: 'sessionToken',
                    fields: ['sessionToken'],
                },
            },
        },
        user: {
            name: 'User',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                name: {
                    name: 'name',
                    type: 'String',
                    isOptional: true,
                },
                email: {
                    name: 'email',
                    type: 'String',
                    isOptional: true,
                },
                emailVerified: {
                    name: 'emailVerified',
                    type: 'DateTime',
                    isOptional: true,
                },
                password: {
                    name: 'password',
                    type: 'String',
                },
                image: {
                    name: 'image',
                    type: 'String',
                    isOptional: true,
                },
                vehicles: {
                    name: 'vehicles',
                    type: 'Vehicle',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'creator',
                },
                contents: {
                    name: 'contents',
                    type: 'Content',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'owner',
                },
                accounts: {
                    name: 'accounts',
                    type: 'Account',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                },
                sessions: {
                    name: 'sessions',
                    type: 'Session',
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                },
            },
            uniqueConstraints: {
                id: {
                    name: 'id',
                    fields: ['id'],
                },
                email: {
                    name: 'email',
                    fields: ['email'],
                },
            },
        },
        verificationToken: {
            name: 'VerificationToken',
            fields: {
                id: {
                    name: 'id',
                    type: 'String',
                    isId: true,
                    attributes: [{ name: '@default', args: [] }],
                },
                identifier: {
                    name: 'identifier',
                    type: 'String',
                },
                token: {
                    name: 'token',
                    type: 'String',
                },
                expires: {
                    name: 'expires',
                    type: 'DateTime',
                },
            },
            uniqueConstraints: {
                identifier_token: {
                    name: 'identifier_token',
                    fields: ['identifier', 'token'],
                },
                id: {
                    name: 'id',
                    fields: ['id'],
                },
                token: {
                    name: 'token',
                    fields: ['token'],
                },
            },
        },
    },
    deleteCascade: {
        user: ['Account', 'Session'],
    },
    authModel: 'User',
};
function $default$Vehicle$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Car$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Motorcycle$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Content$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Post$createdBy(user: any): unknown {
    return user?.id;
}

function $default$Video$createdBy(user: any): unknown {
    return user?.id;
}
export default metadata;
